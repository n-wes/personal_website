## How to build and test
This repository uses the vue framework and the vite build tool.

Run `npm i` to install all node packages in this depository.

Then run `npm run dev` to build a dev version locally.

## Deploy on Google Cloud
From now, we'll be using the `gcloud` package to deploy the container to Google Cloud. You can either install the package locally on your device, or use the online terminal in the google cloud website.

This document will outline how to deploy using the online google cloud terminal.

Log into google cloud and proceed to the console.

Open the Cloud Shell Terminal (on the top right as of writing this).

Run `git clone https://github.com/n-wes/personal_website.git` to clone this repository on the cloud shell terminal instance.

Run `docker build -t client .` to dockerize the app.

Run `docker tag client gcr.io/<project-id>/client`. You can find the project id on Google Cloud.

To push the image run `docker push gcr.io/<project-id>/client`. To push the image to the container registry of images on google cloud for the project.

Go to Google Cloud Run, `Edit & Deploy New Revision`.

Change the container image url to the new image.

## How to dockerize app and test
Start up docker on your machine.

Run `docker build -t client .` to create a docker image of this current repository.

Run `docker run -p 8888:80 client` to run the `client` image we built on `localhost:8888`.

Go to your browser and type in `localhost:8888` to ensure that the site is properly built.