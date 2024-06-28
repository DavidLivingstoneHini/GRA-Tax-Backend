# Clone the repository
```sh
   git clone https://github.com/DavidLivingstoneHini/GRA-Tax-Backend.git
   ```

# Installing dependencies

 ```sh
   npm install
   ```
# Starting the app

 ```sh
   npm run start:dev
   ```

# Testing api in postman

```sh
Api url: http://localhost:{PORT}/api/salary-calculator

1. Open Postman and create a new request.

2. Set the HTTP method to POST.

3. Set the request URL to http://localhost:{PORT}/api/salary-calculator.

4. In the "Body" tab, select "raw" and choose "JSON" as the body type.

5. Provide the necessary input parameters in the request body. For example:
   {
     "netSalary": 6000,
     "allowances": 500,
     "employeePensionContribution": 200
   }

6. Click the "Send" button to make the request.

7. Postman will display the response from the server, including the status code and the calculated salary.
   ```


