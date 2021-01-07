git pull
npm ci
node index.js
rclone copy --update --verbose --transfers 25 --stats 1s imgs/ memes:/reddit
rm -rf imgs/