# The Cloudflare situation

<!-- The True or False project started in 4th April 2023 when Mr. Tejas Kumar asked me to do it as an open source project. The project was a breeze to start with, even when it was my first project in Nuxt. -->

Nuxt is a great tool that Vue developers can use to create beautiful and websites easily. So I started working on an open source project with Nuxt on 4th April 2023 with the advice from Mr. Tejas Kumar. Little did I know deploying the project to cloudflare would be such a taxing challenge.

I had completed the home page of the website when I decided to deploy the project to cloudflare. I had already deployed the project to vercel and netlify and it took little than a few seconds to connect the github account and deploy the project to both the services. So, I thought deploying to cloudflare will not be much different.

Eventually I logged in to cloudflare, arrived at cloudflare pages and connected my github account, selected the project and started the deployment. But an error came up that didn't let the project deploy. Cloudflare cloned the project, completed the build and while it tried to find the `dist` folder to locate the built files, the folder was not found. Cloudflare returned an `Error: Output directory "dist" not found.` error.

Being the first time deploying to cloudflare, I had no idea what to do. I searched for a solution in the internet and the documentation, ending up in a dead end. I tried numerous solutions and landed on a [stack overflow](https://stackoverflow.com/questions/72587107/nuxt3-deployment-with-cloudflare-pages-failed) that I believed will be the solution. However it didn't work. I stopped for the day and decided to start afresh the next day.

The next day, I found a Godsend that solved the problem. The problem with nuxt was that unlike traditional frontend frameworks, nuxt builds are not built in the `/dist` folder in the root of the application. It is built into another folder named `.output/public` which is usually ignored by git. While cloudflare builds the project, the `.output` folder was not accessible by cloudflare. This was the reason for the failed deployment. The only solution was that before deploying the website and even before pushing the project to the github, I had to remove the `.output/public` folder fromm `.gitignore`, build the project to the `.output/public` folder and push the same onto github. In the cloudflare deployment settings, instead of rebuilding the website each time, I had to run `npm ci` and provide the `.output/public` folder as the build output directory.

Hence the issue was solved.
