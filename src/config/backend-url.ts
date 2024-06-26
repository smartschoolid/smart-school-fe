type BackendUrl = {
  production: string;
  development: string;
  staging: string;
};

const _backendUrl: BackendUrl = {
  production: "https://api.myapp.com",
  development:
    "https://e12a-2001-448a-400e-15e9-db-ea0d-ca02-ec3a.ngrok-free.app",
  staging: "https://e12a-2001-448a-400e-15e9-db-ea0d-ca02-ec3a.ngrok-free.app",
};

const apiUrl = _backendUrl["development"];

export default apiUrl;
