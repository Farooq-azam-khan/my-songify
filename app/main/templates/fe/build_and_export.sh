sed -i "s/enabled: false/enabled: true/g" tailwind.config.js
npm run build:tailwind
sed -i "s/enabled: true/enabled: false/g" tailwind.config.js
npm run build
mv build ../../../static/