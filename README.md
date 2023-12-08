## User Authentication

For user authentication, the app uses the data obtained from the API. The structure of the user object is as follows:

```json
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "gender": "male",
  "employmentStatus": "Full-Time"
  // ... other user properties
}

Username: The user's first name is used as the username.
Password: The user's email address is used as the password.
When logging in, the app checks for a match between the entered username (first name) and password (email) with the data obtained from the API.











              
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:



# My Dashboard App

This is a simple dashboard app built with React. The app includes features such as user login, a navigation bar, and a main dashboard with a pie chart.

## Getting Started

To run this app locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/hemraj29/record_tracker.git


   Features
User login functionality.
Main dashboard with a navigation bar.
Pie chart displaying gender and employment data.
Technologies Used
React
React Router
Chart.js
Folder Structure
src/ - Contains the source code of the React app.
components/ - React components.
context/ - User context and provider.
App.js - Main entry point of the app.
Contributing
Contributions are welcome! If you find a bug or have a feature request, please open an issue.

License
This project is licensed under the MIT License - see the LICENSE file for details.




{


API USED == https://dummyjson.com/users



IMPORTANT INFORMATION ----> 


THIS IS SAMPLE JSON DATA IN PROJECT 

in LOGIN FROM -- firstName  of api data --> treated as UserName 
              -- email is used for authentication (Password)

{"id":1,"firstName":"Terry","lastName":"Medhurst","maidenName":"Smitham","age":50,"gender":"male","email":"atuny0@sohu.com","phone":"+63 791 675 8914","username":"atuny0","password":"9uQFF1Lh","birthDate":"2000-12-25","image":"https://robohash.org/hicveldicta.png","bloodGroup":"A−","height":189,"weight":75.4,"eyeColor":"Green","hair":{"color":"Black","type":"Strands"},"domain":"slashdot.org","ip":"117.29.86.254","address":{"address":"1745 T Street Southeast","city":"Washington","coordinates":{"lat":38.867033,"lng":-76.979235},"postalCode":"20020","state":"DC"},"macAddress":"13:69:BA:56:A3:74","university":"Capitol University","bank":{"cardExpire":"06/22","cardNumber":"50380955204220685","cardType":"maestro","currency":"Peso","iban":"NO17 0695 2754 967"},"company":{"address":{"address":"629 Debbie Drive","city":"Nashville","coordinates":{"lat":36.208114,"lng":-86.58621199999999},"postalCode":"37076","state":"TN"},"department":"Marketing","name":"Blanda-O'Keefe","title":"Help Desk Operator"},"ein":"20-9487066","ssn":"661-64-2976","userAgent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24"},

