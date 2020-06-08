#Microfrontends 

This project demonstrates my own personal, oppinionated view on implementing **Microfrontends**

It uses WebComponents as the basis.

All apps are configured to be built as WebComponents and have a script to start ***static-server*** to serve the resulting files as static js and css

#castle-builder

- represents the Shell Application
- this app is intended to orchestrate routing between various microfrontends
- this version is implemented in Angular 9
- run with "ng serve"
 
#story-book

- represents the main presentation of the problem that microfrontends solves and the pitfalls
- built using VueJs
- run with "npm run build:wc"

#castle-app

- represents the interior of the castle
- built using Vanilla JS & some magic using WebComponents
- run with "npm run dev"

#assets folder

- this is where all the images and various other items reside
- run with "static-server -p 4205 -c * ./"