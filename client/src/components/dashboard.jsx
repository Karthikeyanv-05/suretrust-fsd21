import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [careerData, setCareerData] = useState(null);
  const [educationData, setEducationData] = useState(null);
  const [statistics, setStatistics] = useState({
    coursesEnrolled: 0,
    goalsAchieved: 0,
  });

  // Check if user is authenticated by token in localStorage
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      navigate('/login');
    } else {
      try {
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
        }
        fetchCareerData();
        fetchEducationData();
        fetchUserStatistics();
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, [navigate]);

  // Fetch career-related data
  const fetchCareerData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/user/career', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setCareerData(response.data);
    } catch (error) {
      console.error('Error fetching career data:', error);
    }
  };

  // Fetch education-related data
  const fetchEducationData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/user/education', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setEducationData(response.data);
    } catch (error) {
      console.error('Error fetching education data:', error);
    }
  };

  // Fetch user statistics (enrolled courses, goals achieved, etc.)
  const fetchUserStatistics = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/user/statistics', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setStatistics(response.data);
    } catch (error) {
      console.error('Error fetching statistics:', error);
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white p-5">
        <div className="text-3xl font-bold mb-10">Career Guide</div>
        <ul>
          <li className="py-3 px-5 hover:bg-blue-600 rounded">
            <a href="#">Dashboard</a>
          </li>
          <li className="py-3 px-5 hover:bg-blue-600 rounded">
            <a href="#">Profile</a>
          </li>
          <li className="py-3 px-5 hover:bg-blue-600 rounded">
            <a href="#">Job Opportunities</a>
          </li>
          <li className="py-3 px-5 hover:bg-blue-600 rounded">
            <a href="#">Education Resources</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-3xl font-bold text-gray-800">Welcome, {user?.name}</div>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* User Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">User Information</h3>
            {user ? (
              <div>
                <p className="text-lg text-gray-600">Name: {user.name}</p>
                <p className="text-lg text-gray-600">Email: {user.email}</p>
                <p className="text-lg text-gray-600">Role: {user.role || 'Student'}</p>
              </div>
            ) : (
              <p className="text-gray-500">Loading...</p>
            )}
          </div>

          {/* Career Data */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Career Guidance</h3>
            <div className="space-y-4">
              {careerData ? (
                <>
                  <p className="text-lg text-gray-600">Suggested Job Roles: {careerData.jobRoles}</p>
                  <p className="text-lg text-gray-600">Required Skills: {careerData.skills}</p>
                  <p className="text-lg text-gray-600">Job Openings: {careerData.openings}</p>
                </>
              ) : (
                <p className="text-gray-500">Loading career data...</p>
              )}
            </div>
          </div>

          {/* Education Data */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Education Tracker</h3>
            <div className="space-y-4">
              {educationData ? (
                <>
                  <p className="text-lg text-gray-600">Current Courses: {educationData.courses}</p>
                  <p className="text-lg text-gray-600">Completed Courses: {educationData.completed}</p>
                  <p className="text-lg text-gray-600">Certifications: {educationData.certifications}</p>
                </>
              ) : (
                <p className="text-gray-500">Loading education data...</p>
              )}
            </div>
          </div>
        </div>

        {/* User Statistics */}
        <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">User Statistics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Courses Enrolled</p>
              <span className="text-2xl font-bold text-blue-600">{statistics.coursesEnrolled}</span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Goals Achieved</p>
              <span className="text-2xl font-bold text-blue-600">{statistics.goalsAchieved}</span>
            </div>
          </div>
        </div>

        {/* Recent Notifications */}
        <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Notifications</h3>
          <div className="space-y-4">
            {/* Example notifications */}
            <p className="text-lg text-gray-600">New career opportunities available!</p>
            <p className="text-lg text-gray-600">You have completed a course in Data Science.</p>
            <p className="text-lg text-gray-600">Your next class starts tomorrow at 10:00 AM.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
