$srcPath = 'src'
$files = Get-ChildItem -Path $srcPath -Recurse -Include '*.tsx','*.ts','*.css','*.html'
$totalChanges = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $original = $content

    # === RED COLOR REPLACEMENTS ===
    # Primary red bg -> gold bg (buttons, backgrounds)
    $content = $content -replace 'bg-\[#D71920\]', 'bg-[#D4AF37]'
    $content = $content -replace 'bg-\[#D91E18\]', 'bg-[#D4AF37]'

    # Red hover bg -> gold hover bg
    $content = $content -replace 'hover:bg-\[#D71920\]', 'hover:bg-[#C9A84C]'
    $content = $content -replace 'hover:bg-\[#b71217\]', 'hover:bg-[#C9A84C]'
    $content = $content -replace 'hover:bg-\[#b71612\]', 'hover:bg-[#C9A84C]'

    # Red text -> gold text
    $content = $content -replace 'text-\[#D71920\]', 'text-[#D4AF37]'
    $content = $content -replace 'text-\[#D91E18\]', 'text-[#D4AF37]'

    # Red hover text -> gold hover text
    $content = $content -replace 'hover:text-\[#D71920\]', 'hover:text-[#D4AF37]'
    $content = $content -replace 'hover:text-\[#D91E18\]', 'hover:text-[#D4AF37]'

    # Red borders -> gold borders
    $content = $content -replace 'border-\[#D71920\]', 'border-[#D4AF37]'
    $content = $content -replace 'border-\[#D91E18\]', 'border-[#D4AF37]'
    $content = $content -replace 'hover:border-\[#D71920\]', 'hover:border-[#D4AF37]'
    $content = $content -replace 'border-l-\[#D71920\]', 'border-l-[#D4AF37]'
    $content = $content -replace 'border-r-\[#D71920\]', 'border-r-[#D4AF37]'
    $content = $content -replace 'border-t-\[#D71920\]', 'border-t-[#D4AF37]'
    $content = $content -replace 'border-b-\[#D71920\]', 'border-b-[#D4AF37]'

    # Red opacity variants -> gold opacity
    $content = $content -replace '\[#D71920\]/5', '[#D4AF37]/10'
    $content = $content -replace '\[#D71920\]/10', '[#D4AF37]/10'
    $content = $content -replace '\[#D71920\]/20', '[#D4AF37]/20'
    $content = $content -replace 'hover:bg-\[#D71920\]/5', 'hover:bg-[#D4AF37]/10'
    $content = $content -replace 'hover:bg-red-50/20', 'hover:bg-[#D4AF37]/10'

    # Tailwind red utilities -> gold/blue equivalents
    $content = $content -replace 'bg-red-50', 'bg-amber-50'
    $content = $content -replace 'hover:bg-red-50', 'hover:bg-amber-50'
    $content = $content -replace 'bg-red-100', 'bg-amber-100'
    $content = $content -replace 'border-red-100', 'border-amber-200'
    $content = $content -replace 'border-red-200', 'border-amber-200'
    $content = $content -replace 'hover:border-red-200', 'hover:border-amber-300'
    $content = $content -replace 'border-red-500', 'border-[#D4AF37]'
    $content = $content -replace 'border-red-700', 'border-[#C9A84C]'
    $content = $content -replace 'text-red-100', 'text-amber-100'
    $content = $content -replace 'text-red-200', 'text-amber-200'
    $content = $content -replace 'text-red-500', 'text-[#D4AF37]'
    $content = $content -replace 'text-red-600', 'text-[#C9A84C]'
    $content = $content -replace 'text-red-700', 'text-[#072A6C]'

    # Inline style red hex
    $content = $content -replace 'color: "#D71920"', 'color: "#D4AF37"'
    $content = $content -replace "color: '#D71920'", "color: '#D4AF37'"
    $content = $content -replace 'color: #D71920', 'color: #D4AF37'
    $content = $content -replace '"#D91E18"', '"#D4AF37"'
    $content = $content -replace "'#D91E18'", "'#D4AF37'"

    # RGBA red -> gold equivalents
    $content = $content -replace 'rgba\(215, 25, 32, 0\.12\)', 'rgba(212, 175, 55, 0.15)'
    $content = $content -replace 'rgba\(215, 25, 32, 0\.15\)', 'rgba(212, 175, 55, 0.2)'
    $content = $content -replace 'rgba\(215, 25, 32, 0\.25\)', 'rgba(212, 175, 55, 0.3)'

    # CSS variable red -> gold
    $content = $content -replace '--color-ured: #D91E18', '--color-ured: #D4AF37'
    $content = $content -replace '--color-primary-red: #D71920', '--color-primary-red: #D4AF37'

    # === BRAND NAME REPLACEMENTS ===
    $content = $content -replace 'City Chalapathi Institute of Technology', 'Chalapathi University'
    $content = $content -replace 'Chalapathi Institute of Technology', 'Chalapathi University'
    $content = $content -replace 'CITY CHALAPATHI INSTITUTE OF TECHNOLOGY', 'CHALAPATHI UNIVERSITY'
    $content = $content -replace 'City Chalapathi Institute', 'Chalapathi University'
    $content = $content -replace 'Chalapathi Institute', 'Chalapathi University'

    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        $totalChanges++
        Write-Host "Modified: $($file.FullName)"
    }
}
Write-Host "Total files modified: $totalChanges"
