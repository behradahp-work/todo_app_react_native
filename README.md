# 📝 Todo App

A modern, feature-rich Todo application built with **React Native** and **Expo**. Manage your daily tasks efficiently with a clean UI, theme support, and seamless authentication.

---

## ✨ Features

- **🔐 Authentication**: Secure login flow using username/password (integrated with DummyJSON Auth).
- **✅ Task Management**:
  - **Create**: Add new tasks easily.
  - **Read**: View your personal todo list.
  - **Update**: Edit task details and toggle completion status.
  - **Delete**: Remove tasks you no longer need.
- **📊 Progress Tracking**: Visual progress bar to track your completion rate.
- **🎨 Theme Support**: Fully customizable **Dark** and **Light** modes (persisted locally).
- **📱 Responsive Design**: Optimized for both iOS and Android devices.
- **💾 Local Storage**: Preferences and Auth state are persisted using Async Storage.

---

## 🛠 Tech Stack

- **Core**: [React Native](https://reactnative.dev/), [Expo](https://expo.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/)
- **Navigation**: React Navigation (Bottom Tabs)
- **State Management**: React Context API
- **Storage**: @react-native-async-storage/async-storage
- **API**: [DummyJSON](https://dummyjson.com/)

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Expo Go](https://expo.dev/client) app on your mobile device (or an emulator).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo_app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npx expo start
   ```

4. **Run on device/emulator:**
   - **Mobile**: Scan the QR code with the **Expo Go** app (Android) or Camera app (iOS).
   - **Emulator**: Press `a` for Android Emulator or `i` for iOS Simulator.

---

## 📂 Project Structure

```
todo_app/
├── app/                 # Expo Router screens & layout
│   ├── (tabs)/          # Main tab navigation (Home, Settings)
│   ├── login.tsx        # Authentication screen
│   └── _layout.tsx      # Root layout configuration
├── assets/              # Images, fonts, and styles
├── components/          # Reusable UI components
│   ├── home_page/       # Home screen specific components
│   └── settings_page/   # Settings screen specific components
├── constants/           # App constants (Colors, API Endpoints)
├── context/             # Global state (Auth, Theme)
├── hooks/               # Custom hooks (useFetch, etc.)
├── types/               # TypeScript definitions
└── .gitignore           # Git ignore rules
```

---

## 📸 Screenshots

|                   Login Screen                    |   Home Screen (Light)   |   Home Screen (Dark)    |        Settings         |
| :-----------------------------------------------: | :---------------------: | :---------------------: | :---------------------: |
| <img src="assets/images/login.png" width="200" /> | <!-- Add Screenshot --> | <!-- Add Screenshot --> | <!-- Add Screenshot --> |

> _Note: Replace the placeholder comments above with actual screenshots of your app._

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.
