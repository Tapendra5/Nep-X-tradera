// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBX3-J3vZlGnM_CkKnXn7jVVdZj7Rrsx-8",
  authDomain: "nepal-trader.firebaseapp.com",
  projectId: "nepal-trader",
  storageBucket: "nepal-trader.firebasestorage.app",
  messagingSenderId: "225982610863",
  appId: "1:225982610863:web:dfe44ff14d72f91013435a",
  measurementId: "G-R6K7E8814T"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Elements
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');
const msg = document.getElementById('auth-msg');
const appSection = document.getElementById('app-section');
const authSection = document.getElementById('auth-section');
const userNameEl = document.getElementById('user-name');
const balanceEl = document.getElementById('user-balance');
const packagesDiv = document.getElementById('packages');
const withdrawCard = document.getElementById('withdraw-card');
const historyCard = document.getElementById('history-card');
const withdrawAmount = document.getElementById('withdraw-amount');
const withdrawID = document.getElementById('withdraw-id');
const paymentMethods = document.querySelectorAll('.pay-icon');
const historyTable = document.getElementById('history-table');

// Packages
const packageList = [
  {name:'Silver', amount:300},
  {name:'Gold', amount:500},
  {name:'Nepal', amount:650},
  {name:'Good', amount:1000}
];

let selectedMethod = null;

// Show/Hide Forms
showRegister.addEventListener('click', e=>{
  e.preventDefault();
  loginForm.classList.add('hidden');
  registerForm.classList.remove('hidden');
});
showLogin.addEventListener('click', e=>{
  e.preventDefault();
  registerForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

// Register
document.getElementById('btn-register').addEventListener('click', async()=>{
  const name=document.getElementById('reg-name').value;
  const email=document.getElementById('reg-email').value;
  const pass=document.getElementById('reg-pass').value;
  try{
