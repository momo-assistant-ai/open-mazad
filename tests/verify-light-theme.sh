#!/bin/bash
# Light theme verification test

GLOBALS_CSS="src/app/globals.css"
TAILWIND_CONFIG="tailwind.config.ts"

# Test 1: Background color is now white/light
echo "Testing: Background color is white/light..."

# Check globals.css has white background
if grep -q "background-color: #ffffff" "$GLOBALS_CSS"; then
    echo "  ✓ globals.css has white background (#ffffff)"
else
    echo "  ✗ globals.css missing white background"
    exit 1
fi

# Check tailwind config has dark color set to white
if grep -q "dark: '#ffffff'" "$TAILWIND_CONFIG"; then
    echo "  ✓ tailwind.config.ts has dark color set to white"
else
    echo "  ✗ tailwind.config.ts missing white dark color"
    exit 1
fi

echo "PASS: Background color is white/light"

# Test 2: Text colors are dark/gray-900
echo ""
echo "Testing: Text colors are dark/gray-900..."

# Check globals.css has dark text color (gray-900 = #111827)
if grep -q "color: #111827" "$GLOBALS_CSS"; then
    echo "  ✓ globals.css has dark text color (#111827 / gray-900)"
else
    echo "  ✗ globals.css missing dark text color"
    exit 1
fi

echo "PASS: Text colors are dark/gray-900"

echo ""
echo "=== All light theme tests passed ==="
exit 0
