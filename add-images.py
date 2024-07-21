import os
import json

# Define the directory containing the images and the JSON file
image_folder = 'grid-gallery-images'
json_file = 'images.json'

# Get list of image files in the directory
image_files = [f for f in os.listdir(image_folder) if f.endswith(('jpg', 'JPG', 'jpeg', 'png', 'gif'))]

# Write the list to the JSON file
with open(json_file, 'w') as f:
    json.dump(image_files, f, indent=4)

print(f'Updated {json_file} with {len(image_files)} images.')
