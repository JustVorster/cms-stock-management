
CMS Stock Management Frontend (Angular 17)
==========================================

This is the frontend SPA built with Angular 17 and Material Design. It provides a user-friendly interface for authenticating users and managing stock items.

Tech Stack
----------
- Angular 17 (standalone modules)
- Angular Material 
- JWT Auth
- RxJS / HttpClient

Requirements
------------
- Node.js v18+
- Angular CLI v17+
  npm install -g @angular/cli

Setup & Run
-----------
1. Navigate to frontend

   cd stock-management-frontend

2. Install dependencies

   npm install

3. Run development server

   ng serve

4. Open in browser

   http://localhost:4200

Authentication
--------------
- Login and registration are built-in
- JWT is stored in localStorage
- Auto-attached to HTTP requests via Angular interceptor

Features
--------
- Register/Login
- View all stock items
- Create new stock item
- View up to 3 images per vehicle
- Dark Material UI
- Responsive layout
- JWT-secured route guards

Folder Highlights
-----------------
| Path                            | Description                  |
|---------------------------------|------------------------------|
| /auth                           | Login / register components  |
| /services/auth.service.ts       | Handles login / JWT logic    |
| /stock-items                    | List + create UI modules     |
| /interceptors                   | Auto-attaches JWT to headers |
| app.routes.ts                   | Angular standalone routing   |

Environment
-----------
Configured to use:

API: https://localhost:7140
Frontend: http://localhost:4200

No proxy needed — CORS enabled server-side.

Build for Production
--------------------
ng build

Status
------
Production-ready SPA frontend
Fully integrated with backend
Responsive and testable
