from PIL import Image
import os

def optimize_image(input_path, output_path, quality=85, max_size=(400, 400)):
    with Image.open(input_path) as img:
        # Resize image while maintaining aspect ratio
        img.thumbnail(max_size, Image.LANCZOS)
        
        # Convert to WebP for better compression
        output_path_webp = os.path.splitext(output_path)[0] + '.webp'
        img.save(output_path_webp, 'WEBP', quality=quality)
        
        # Also save original format with compression
        img.save(output_path, optimize=True, quality=quality)

# Optimize hero image
input_image = r'c:\Users\Nikhil G\Documents\port\Assets\images\mygib.png'
output_image = r'c:\Users\Nikhil G\Documents\port\Assets\images\mygib_optimized.png'
optimize_image(input_image, output_image)

print(f"Image optimized: {output_image}")
