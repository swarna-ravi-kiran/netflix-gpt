Episode -14
# netflix-gpt

-->to install the all the packages for create-react-app -->open in the desktop and run npx.cmd create-react-app netflix-gpt
-->install tailwind css by running this commands (https://v3.tailwindcss.com/docs/guides/create-react-app)

# feature of nextflix -gpt
-login/signup page
 -sign in/ sign up form
 -re-directing to browser page
-Browser (only comes after authentication)
 -Header
 -Main Movie
   -trailer in background
   -title and description
   -movie suggestions
     -movie list
-netflix gpt
 -search bar
 -movie suggestions
  

-->formik is the librart to use validations for the forms.
-->useRef() hook -->is used to, lets you reference a value that's not needed for rendering.
-->useRef() explained in the 1.47 minutes

-->for backend used firebase from google.(https://firebase.google.com/)(https://console.firebase.google.com/project/_/overview?purchaseBillingPlan=no-cost&_gl=1*1fbxgay*_ga*MTc2OTA5OTQyMy4xNzk0MjM5ODMx*_ga_CW55HF8NVT*czE3OTQyMzk4MzAkbzEkZzEkdDE3OTQyNDAwNTUkajYwJGwwJGgw)

-->after firebase setup we have to run the 'npm.cmd install -g firebase-tools' command (to install firebase CLI)
--> firebase.cmd login (firebase login)
 -then will get Visit this URL on this device to log in:
https://accounts.google.com/o/oauth2/auth?client_id=563584335869-fgrhgmd47bqnekij5i8b5pr03ho849e6.apps.googleusercontent.com&scope=email%20openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloudplatformprojects.readonly%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffirebase%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform&response_type=code&state=199663486&redirect_uri=http%3A%2F%2Flocalhost%3A9005

 -Success! Logged in as swarnaravikiran123456789@gmail.com
-->then run this command firebase.cmd init (Initializing firebase then select hosting)
-->then run npm.cmd run build -->it will do the build and build folder will generated with html, then we have to run deployment of the build folder.
-->command for build deployment is firebase.cmd deploy (https://netflixgpt-501bb.web.app/) deployed application
