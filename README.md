# 🌱 BhoomiSense

**BhoomiSense** is an intelligent agriculture system that leverages **IoT sensors + Machine Learning** to help farmers make data-driven decisions for crop selection and yield optimization.

---

## 🚀 Overview

BhoomiSense collects **real-time soil and environmental data** using sensors and processes it through trained **Machine Learning models**. Based on this data, it recommends the **top 5 crops with the highest yield potential** and visualizes everything on an interactive **React dashboard**.

---

## 🎯 Key Features

* 🌾 **Smart Crop Recommendation**

  * Suggests **Top 5 crops** based on soil conditions
  * Uses trained ML models for prediction

* 📊 **Interactive Dashboard**

  * Built with React (Vite + Tailwind)
  * Displays:

    * Sensor readings
    * Crop recommendations
    * Yield predictions

* 🌡️ **Real-Time Sensor Data**

  * Soil parameters like:

    * Moisture
    * Temperature
    * Nutrients
    * pH levels

* 🤖 **Machine Learning Integration**

  * Crop prediction model
  * Yield prediction model

* 📈 **Data Visualization**

  * Graphs and trends for better understanding
  * Historical insights for decision-making

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS

### Backend

* Python (Flask)

### Machine Learning

* Scikit-learn models
* Pickle (`.pkl`) files for trained models

---

## 🧠 How It Works

1. **Sensor Data Collection**

   * Soil sensors collect real-time environmental data

2. **Data Processing**

   * Backend processes incoming sensor values

3. **ML Prediction**

   * Models analyze soil conditions
   * Predict:

     * Best crops
     * Expected yield

4. **Dashboard Display**

   * Results are shown on a user-friendly React dashboard

---

## 📂 Project Structure

```
BhoomiSense/
│
├── backend/
│   ├── app.py
│   ├── ml_service.py
│   ├── models (.pkl)
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── assets/
│
├── public/
├── package.json
├── requirements.txt
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Yash-yad/BhoomiSense.git
cd BhoomiSense
```

---

### 2️⃣ Backend Setup

```bash
pip install -r requirements.txt
python app.py
```

---

### 3️⃣ Frontend Setup

```bash
npm install
npm run dev
```

---

## 📊 Output

* 🌱 Top 5 recommended crops
* 📉 Predicted crop yield
* 📊 Sensor data visualization
* 📈 Trend graphs

---

## 🔮 Future Enhancements

* 🌍 Live IoT integration (hardware sensors)
* 📱 Mobile app support
* ☁️ Cloud deployment
* 📡 Real-time alerts & notifications
* 🧠 Advanced AI models

---

## 🤝 Contributors

* Yash Yadav (Project Lead)
* Team Bitsnbyte

---

## 📌 Conclusion

BhoomiSense bridges the gap between **agriculture and technology**, helping farmers maximize productivity using **data-driven insights and AI-powered recommendations**.


