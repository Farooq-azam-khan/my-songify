# enable ts.config.js to purge

echo "Creating purgedcss file"
sed -i "s/enabled: false/enabled: true/g" tailwind.config.js
npm run build:tailwind



# build react code 
npm run build

# get file names for new js and css files
cssChunkMainFile=$(ls ./build/static/css | grep -E "^main.*.chunk.css$")
jsChunk2File=$(ls ./build/static/js | grep -E "^2.*.chunk.js$")
jsChunkMainFile=$(ls ./build/static/js | grep -E "^main.*.chunk.js$")

# update index file with new js and css files
echo "updating ${cssChunkMainFile}"
sed -i -r "s/main.*.chunk.css/${cssChunkMainFile}/g" ../index.html

echo "updating ${jsChunk2File}"
sed -i -r "s/2.*.chunk.js/${jsChunk2File}/g" ../index.html

echo "updating ${jsChunkMainFile}"
sed -i -r "s/main.*.chunk.js/${jsChunkMainFile}/g" ../index.html


# move build folder
echo "Moving file"
rm -r ../../../static/build
mv build ../../../static/


# undo purge of tailwind css
echo "Updating tailwind css to be un-purged"
sed -i "s/enabled: true/enabled: false/g" tailwind.config.js
# build after undoing purge
npm run build:tailwind