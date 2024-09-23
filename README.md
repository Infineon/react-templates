# DevGate React Template


## Getting Started

### Prerequisites

- [Node](https://nodejs.org/en/) > v16 .
- [Yarn](https://classic.yarnpkg.com/en/) > v1.22.10, or [Npm](https://www.npmjs.com/) > v8.

### Installation of React

**With flag**

```bash
npx --yes create-react-app@latest my-app 
```

**Without flag**

```bash
npx create-react-app@latest my-app 
```

### Installation of the React template 

**1. Open your React application**

**2. Open terminal, and run the following command**

```bash
npm install @webdevelopment/react-cli-plugin-frontend-react-template-basic
```

### Invocation of the React template 

**After the Template has been installed, run the following command in the terminal to invoke the template**

**With flag**

```bash
npx @webdevelopment/react-cli-plugin-frontend-react-template-basic -m "Horizontal Menu" -v "1.0.0" -a "No Authentication"
```

**Without flag**

```bash
npx @webdevelopment/react-cli-plugin-frontend-react-template-basic 
```

### Installation of dependencies

**After the successful installation and invocation of the Template, run the following command in the terminal to install the required dependencies**

```bash
npm install
```

### Running the Template

**Without Authentication**

```bash
npm run start
```

**With Authentication**

1. Add your auth credentials in the .env file

2. Start Docker

3. Run the application

```bash
npm run start
```

