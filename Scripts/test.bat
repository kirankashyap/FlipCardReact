set CI= true
CALL npm install && npm run unitTest && cd ui && npm install && npm run unitTest
