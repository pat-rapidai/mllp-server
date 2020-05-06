# MLLP-SERVER
This project acts as a light weight test MLLP server to receive HL7 message

## Pre-requisites
Check for npm and node versions. If both the requisites are installed, skip to this step.
```bash
node --version
npm --version
```

1. Add NodeSource yum repository

    The current LTS version of Node.js is version 10.x. If you want to install version 8 just change setup_10.x with setup_8.x in the command below.

    Run the following curl command to add the NodeSource yum repository to your system:
    ```bash
    curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
    ```

2. Install Node.js and npm
    Once the NodeSource repository is enabled, install Node.js and npm by typing:

   ```bash
    sudo yum install nodejs
   ```
    When prompted to import the repository GPG key, type y, and press Enter.
    
3. Verify the Node.js and npm Installation
    To check that the installation was successful, run the following commands which will print the Node.js and npm versions.

    Print Node.js and npm versions:
    ```bash
    node --version
    npm --version
    ```

## Installation

1. Clone the repository
    ```bash
    git clone https://github.com/pat-rapidai/mllp-server.git
    ```

2. Install dependencies
   ```bash
   cd mllp-server
   npm install 
   ```

## Usage
Initial the MLLP server by running the index.js file in node.
```bash
node index.js
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
