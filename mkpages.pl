#!/usr/bin/perl -w

my @files = `find ../Haraka-publish -type f -name \*.md`;
chomp(@files);

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
    local $\;
    my $md2html = <$fh>;
    return $md2html;
}

my $wrapper = `cat template.html`;

my $chapter_out = '';

for my $file (sort { dirname($a) cmp dirname($b) } @files) {
    my $out = output($file);
    print "Processing $file => $out\n";
    system("mkdir", "-p", dirname($out)) unless $file =~ /README/;
    open(my $outfh, ">", $out);

    my $output = convert($file);

    my ($title) = ($output =~ /<h1>([^<]*)/);
    $title ||= "Haraka";
    $title .= " plugin" if $out =~ /plugin/;

    my $template = $wrapper;
    $template =~ s/<\%=\s*title\s*\%>/$title/g;
    $template =~ s/<\%=\s*content\s*\%>/$output/g;

    print $outfh $template;
    close($outfh);

    $chapter_out .= "<li><a href='/$out' target=\"content\">$title</a></li>\n";
}

my $chapter_template = `cat chapter-index-template.html`;

open(my $outfh, ">", "manual/chapter-index.html") || die $!;

$chapter_template =~ s/<\%=\s*content\s*\%>/$chapter_out/g;

print $outfh $chapter_template;
close($outfh);
