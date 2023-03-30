# Pet's App
- This is an application that allows users to store their pet's information regarding, birthdays, breed, & food schedules. Allowing a user to see information about the breed of their cat.
- Powered by a RubyonRails [Backend](https://github.com/dallinforsyth/Capstone-API), React frontend, & third party [API](https://api.thecatapi.com/v1/breeds) 
 ![Screenshot 2023-03-30 at 3 09 52 PM](https://user-images.githubusercontent.com/122250064/228953653-f2d1c1de-527b-4568-86b2-5a817946ed4b.png)

### Backend
- I created 3 models, Pets, FoodSchedules, & Breeds.
- After seeding my seeds file, CRUD-ing out the necessary routes, and generating tests/views. The backend was ready
- One of my most valued technologies implemented was the cat's breed information. I used a third-party API to seed my Breeds table. Allowing a user to choose from 67 different cat breeds. Then displaying breed information to the User (lifespan, origin, description, temperament, etc..)

### Frontend
- Powered by React I built my frontend, threading the backend data towards it.
- When constructing my frontend I had to allow a user to signup & login. Then let each user create their pets. When tackling this problem I was able to rely on forums to help lay it out for me since many people have implemented something like this.
- After that, I had to create a 'New Food Schedule' system. The trickiest part for me was automatically updating the pets "Food Schedule" section without using a refresh. After careful attentiveness to the `hanldeNewFoodSchedule`, I was able to get it working!
- I then implemented a multi-page Application, distributing each function to its representative pages. Helping the user have a more seamless experience.
- Finally, I re-designed my application using React-bootstrap. Allowing the user experience to be even easier and appealing  


## Clone and Run Application
- First, clone this GitHub file. As well as the Backend documentation [here](https://github.com/dallinforsyth/Capstone-API)
- Then open the backend in your termainl, and type `rails severs` to start the backend server.
- Next, open the front end in your terminal, and run the command `npm run dev` to start the front-end server.
- Finally visit the website `http://localhost:5173/` to see the Pet Application in all its glory! Feel free to experiment with things!
