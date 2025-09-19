# PNCC Palau Website

This is a web application for the Palau National Communications Corporation, built with a Laravel backend and a React frontend using Inertia.js.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [PHP](https://www.php.net/manual/en/install.php) (>= 8.2)
- [Composer](https://getcomposer.org/doc/00-intro.md)
- [Node.js](https://nodejs.org/en/download/) (v20.x or as specified in `.nvmrc`)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- A local database server (e.g., MySQL, PostgreSQL)

## Development Environment

To run PHP and a database server, you will need a local development environment. While you can install these services manually, tools like the following can simplify the process:

-   **For macOS:** [Laravel Herd](https://herd.laravel.com/) is a fast, integrated development environment that includes everything you need.
-   **For Windows:** [Laragon](https://laragon.org/) is a popular choice.
-   **Cross-platform:** [Docker](https://www.docker.com/) with [Laravel Sail](https://laravel.com/docs/sail) provides a containerized development environment.

This project is configured to work well with Laravel Herd.

## Creating a New Project (From Scratch)

The following instructions are for creating a brand new project from scratch using the Laravel Installer with the React starter kit.

1.  **Prerequisite: Laravel Installer**
    Ensure you have the [Laravel Installer](https://laravel.com/docs/installation#the-laravel-installer) installed globally via Composer.
    ```bash
    composer global require laravel/installer
    ```

2.  **Create the New Project**
    Run the `laravel new` command with the `--breeze` and `--react` flags. This single command will create the Laravel project and scaffold the entire React starter kit, including authentication.
    ```bash
    laravel new my-new-app --breeze --react
    cd my-new-app
    ```

3.  **Finalize Installation**
    Once the project is created, you can proceed with the standard setup steps:
    - Install the frontend dependencies: `npm install`
    - Configure your `.env` file.
    - Run the database migrations: `php artisan migrate`
    - Start the development servers: `npm run dev` and `php artisan serve`

## Project Setup (From Existing Source)

These instructions are for setting up the project after cloning it from a repository.

1.  **Clone the Repository**
    Open your terminal, navigate to where you want to store the project, and clone the repository.
    ```bash
    git clone <repository-url>
    cd pnccpalau.com
    ```
    *(Replace `<repository-url>` with the actual URL of the Git repository.)*

2.  **Install Backend Dependencies**
    Install the PHP dependencies using Composer.
    ```bash
    composer install
    ```

3.  **Install Frontend Dependencies**
    Install the JavaScript dependencies using npm. If you are using `nvm`, run `nvm use` first to ensure you are using the correct Node.js version.
    ```bash
    npm install
    ```

4.  **Environment Configuration**
    - Copy the example environment file:
      ```bash
      cp .env.example .env
      ```
    - Generate a new application key:
      ```bash
      php artisan key:generate
      ```
    - Open the `.env` file in a text editor and configure your database connection details (`DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`).

5.  **Database Migration**
    Run the database migrations to set up your database schema.
    ```bash
    php artisan migrate
    ```

## Development

To start the development servers, you will need to run two commands in separate terminal tabs.

1.  **Start the Vite Development Server**
    This server will watch your frontend assets (React, CSS) for changes and rebuild them automatically.
    ```bash
    npm run dev
    ```

2.  **Start the Laravel Development Server**
    This server will run the backend application.
    ```bash
    php artisan serve
    ```

After starting both servers, you should be able to access the application at the URL provided by `php artisan serve` (usually `http://127.0.0.1:8000`).

## Available Scripts

-   `npm run dev`: Starts the Vite development server.
-   `npm run build`: Compiles and bundles the frontend assets for production.
-   `npm run lint`: Lints the JavaScript and TypeScript files for code quality.
-   `npm run format`: Formats the code using Prettier.
-   `npm run types`: Runs the TypeScript compiler to check for type errors.

## Testing

To run the backend test suite, use the following Artisan command:
```bash
php artisan test
```
