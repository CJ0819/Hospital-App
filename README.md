MediBook is an innovative solution aimed at transforming how patients interact with healthcare services. The app offers patients a straightforward and efficient way to book, manage, and keep track of their hospital appointments.
Frontend:
React Native: A framework for building native apps using React.
Expo: A set of tools and services built around React Native to streamline development.

Backend:
MongoDB: A NoSQL database for managing data related to appointments, doctors, and patients.

Authentication:
Clerk: A service for managing secure user authentication and authorization.

Payment Integration:
Paystack: A payment processing platform for handling appointment-related transactions.
<img width="1619" alt="Screenshot 2024-09-07 at 9 43 55 PM" src="https://github.com/user-attachments/assets/b8b2e3a6-1dd3-4f66-9e51-f0369bb58c2a">
<img width="1652" alt="Screenshot 2024-09-07 at 9 44 48 PM" src="https://github.com/user-attachments/assets/39454ff5-cefd-4287-9bad-69ae32feb2e2">

How to Run Project
1.Install Expo CLI
  npm install -g expo-cli
 Install the required dependencies:
 npm install
   
2.Setup MongoDB Connection
  Navigate to the api folder within your project.
  Paste your MongoDB connection string in the appropriate file (usually a file like db.js or index.js):
  mongoose.connect('mongodb+srv://************************',
  
3.Step 3: Add Paystack Key and Billing Email
  Navigate to the components folder in your project.
  Open the BookAppointments folder.
  Open Bookingsection.js and BookingsectionKath.js.
  Paste your Paystack key and billing email in these files:
  const paystackPublicKey = 'pk_test_*****************';
  const billingEmail = 'yourbillingemail@example.com'; 
  
4.Start the Project
Start the Metro bundler: npm start
