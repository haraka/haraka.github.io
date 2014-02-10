#!/usr/bin/perl -w

my @files = `find ../Haraka-publish -type f -name \\*.md`;
chomp(@files);

my @plugins;
my @tutorials;
my @core;

for (@files) {
    push @plugins, $_ and next if /\/plugins\//;
    push @tutorials, $_ and next if /\/tutorials\//;
    push @core, $_;
}

unshift(@core, pop(@core));

print "Tutorials: @tutorials\n";
print "Core: @core\n";

@plugins = sort  { sort_order($a, $b) } @plugins;

sub sort_order {
    my ($filea, $fileb) = @_;
    my ($namea)   = $filea =~ /\/([^\/]*)$/;
    my ($nameb)   = $fileb =~ /\/([^\/]*)$/;
    my ($foldera) = $filea =~ /\/plugins\/(.*?)\//;
    my ($folderb) = $fileb =~ /\/plugins\/(.*?)\//;
    $foldera ||= 'zzzz';
    $folderb ||= 'zzzz';
    return "$foldera/$namea" cmp "$folderb/$nameb";
}

print "Plugins: " . join("\n", @plugins) . "\n";

sub output {
    my $in = shift;
    $in =~ s/.*\/docs/manual/;
    $in =~ s/.*Haraka-publish\///;
    $in =~ s/\.md$/.html/;
    return $in;
}

sub dirname {
    my $in = shift;
    $in =~ s/[^\/]*$//;
    return $in;
}

sub convert {
    my $file = shift;
    open(my $fh, "./Markdown.pl $file |") || die "Cannot run Markdown.pl: $!";
    local $/;
    my $md2html = <$fh>;
    return $md2html;
}

my $wrapper = `cat template.html`;

my $chapter_out = '<ul class="nav bs-sidenav">';
my $plugins_sent = 0;
my $tutorials_sent = 0;
my $core_sent = 0;

my %outputs;

for my $file (@core) {
    process($file);
}

for my $file (@tutorials) {
    process($file);
}

for my $file (@plugins) {
    process($file);
}

sub process {
    my $file = shift;
    my $out = output($file);
    print "Processing $file => $out\n";
    system("mkdir", "-p", dirname($out)) unless $file =~ /README/;

    my $output = convert($file);

    my ($title) = ($output =~ /<h1>([^<]*)/);
    $title ||= "Haraka";
    # $title .= " plugin" if $out =~ /plugin/;

    $outputs{$out} = { content => $output, title => $title };

    if (!$plugins_sent && $out =~ /plugin/) {
        $plugins_sent++;
        $chapter_out .= "</ul></li>\n<li><a class=\"submenu\" data-toggle=\"collapse\" data-target=\"#plugins\" data-parent=\"#chapternav\" href=\"#\">Plugins</a>\n<ul id='plugins' class='nav'>\n";
    }
    elsif (!$tutorials_sent && $out =~ /tutorial/i) {
        $tutorials_sent++;
        $chapter_out .= "</ul></li>\n<li><a class=\"submenu\" data-toggle=\"collapse\" data-target=\"#tutorials\" data-parent=\"#chapternav\" href=\"#\">Tutorials</a>\n<ul id='tutorials' class='nav'>\n";
    }
    elsif ($out !~ /(tutorial|plugin)/i && !$core_sent) {
        $core_sent++;
        $chapter_out .= "<li><a class=\"submenu\" data-toggle=\"collapse\" data-target=\"#core\" data-parent=\"#chapternav\" href=\"#\">Core</a>\n<ul id='core' class='nav'>\n";
    }

    $chapter_out .= "<li><a href='/$out'>$title</a></li>\n";
}

$chapter_out .= "</ul></li></ul>\n";

my $chapter_template = `cat chapter-index-template.html`;

open(my $outfh, ">", "manual/chapter-index.html") || die $!;

$chapter_template =~ s/<\%=\s*content\s*\%>/$chapter_out/g;

print $outfh $chapter_template;
close($outfh);

for my $out (keys %outputs) {
    print "Writing: $out\n";
    
    open(my $outfh, ">", $out);
    
    my $template = $wrapper;
    my $chap = $chapter_out;
    $chap =~ s/<li><a href='\/$out'/<li class="active"><a href='\/$out'/;
    $template =~ s/<\%=\s*title\s*\%>/$outputs{$out}{title}/g;
    $template =~ s/<\%=\s*content\s*\%>/$outputs{$out}{content}/g;
    $template =~ s/<\%=\s*navbar\s*\%>/$chap/g;
    
    print $outfh $template;
    close($outfh);
}

system("cp README.html manual.html");
