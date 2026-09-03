import React from "react";
import { Link } from "react-router-dom";

import {
  Leaf,
  Activity,
  AlertTriangle,
  Upload,
} from "lucide-react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const diseaseData = [
  { name: "Healthy", value: 65 },
  { name: "Leaf Rust", value: 15 },
  { name: "Blight", value: 12 },
  { name: "Other", value: 8 },
];

const COLORS = ["#16a34a", "#dc2626", "#f59e0b", "#64748b"];

const Dashboard = () => {
  return (
    <div className="container-fluid bg-light min-vh-100">
      {/* Navbar */}
      <header className="bg-white border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
        <h1 className="fs-4 fw-bold mb-0">
          🌱 Crop <b style={{ color: "red" }}>Prediction</b>
        </h1>

        <div className="d-flex align-items-center gap-2">
          <div
            className="rounded-circle bg-success-subtle d-flex align-items-center justify-content-center"
            style={{ width: "40px", height: "40px" }}
          >
            👨‍🌾
          </div>

          <span className="fw-medium">Farmer</span>
        </div>
      </header>

      <main className="container py-5">
        {/* Heading */}
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h2 className="display-6 fw-bold">
              Dashboard
            </h2>

            <p className="text-secondary">
              Monitor your crop health and disease predictions.
            </p>
          </div>

          <Link
            to="/prediction/new"
            className="btn btn-success d-flex align-items-center gap-2"
          >
            <Upload size={18} />
            New Analysis
          </Link>
        </div>

        {/* Statistics */}
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <StatCard
              title="Total Predictions"
              value="124"
              icon={<Activity size={24} />}
            />
          </div>

          <div className="col-md-6 col-lg-3">
            <StatCard
              title="Healthy Crops"
              value="89"
              icon={<Leaf size={24} />}
            />
          </div>

          <div className="col-md-6 col-lg-3">
            <StatCard
              title="Diseased Crops"
              value="35"
              icon={<AlertTriangle size={24} />}
            />
          </div>

          <div className="col-md-6 col-lg-3">
            <StatCard
              title="Health Percentage"
              value="71.8%"
              icon={<Leaf size={24} />}
            />
          </div>
        </div>

        {/* Charts */}
        <div className="row g-4 mt-2">
          {/* Disease Distribution */}
          <div className="col-md-6">
            <div className="bg-white rounded-4 p-4 shadow-sm">
              <h3 className="fs-5 fw-bold mb-4">
                Disease Distribution
              </h3>

              <div style={{ height: "300px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={diseaseData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      label
                    >
                      {diseaseData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index]}
                        />
                      ))}
                    </Pie>

                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Recent Predictions */}
          <div className="col-md-6">
            <div className="bg-white rounded-4 p-4 shadow-sm">
              <h3 className="fs-5 fw-bold mb-4">
                Recent Predictions
              </h3>

              <div>
                <Prediction
                  crop="Wheat"
                  disease="Healthy"
                  confidence="94%"
                />

                <Prediction
                  crop="Rice"
                  disease="Leaf Blast"
                  confidence="91%"
                />

                <Prediction
                  crop="Corn"
                  disease="Healthy"
                  confidence="97%"
                />

                <Prediction
                  crop="Tomato"
                  disease="Early Blight"
                  confidence="89%"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-4 p-4 shadow-sm h-100">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p className="small text-secondary mb-1">
            {title}
          </p>

          <h3 className="fs-2 fw-bold mb-0">
            {value}
          </h3>
        </div>

        <div className="bg-success-subtle text-success p-3 rounded-3">
          {icon}
        </div>
      </div>
    </div>
  );
}

function Prediction({ crop, disease, confidence }) {
  const healthy = disease === "Healthy";

  return (
    <div className="d-flex justify-content-between align-items-center border-bottom py-3">
      <div>
        <p className="fw-semibold mb-1">
          {crop}
        </p>

        <p
          className={`small mb-0 ${
            healthy ? "text-success" : "text-danger"
          }`}
        >
          {disease}
        </p>
      </div>

      <span className="fw-semibold text-secondary">
        {confidence}
      </span>
    </div>
  );
}

export default Dashboard;