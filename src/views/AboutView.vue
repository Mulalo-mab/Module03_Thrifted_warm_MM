<template>
    <div class="about section">
      <!-- About Us Header -->
      <section class="about-header text-white d-flex align-items-center">
        <div class="container text-center">
          <h1 class="about-title">Thrifted Warmth</h1>
          <h4 class="about-subtitle">Stay Warm, Look Stylish</h4>
          <p class="about-description">
            The story of how we bring warmth and sustainability to your wardrobe.
          </p>
          <!-- Create Account Button -->
          <div class="about-buttons">
            <router-link to="/register" class="btn btn-warning">Create Account</router-link>
          </div>
        </div>
      </section>
  
      <!-- Milestones Section -->
      <section class="milestones">
        <h3>Our Milestones</h3>
        <div class="milestone-list">
          <div class="milestone-item" v-for="milestone in milestones" :key="milestone.id">
            <h4>{{ milestone.title }}</h4>
            <p>{{ milestone.description }}</p>
            <p class="date">{{ milestone.date }}</p>
          </div>
        </div>
        <br>
        <button @click="openModal" class="btn btn-warning">Get In Touch</button>
      </section>
  
      <!-- Modal -->
      <div v-if="showModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button @click="closeModal" class="close-button">&times;</button>
          <h4>Contact Us</h4>
          <p><i class="fas fa-envelope"></i> Email: contact@thriftedwarmth.com</p>
          <p><i class="fas fa-phone"></i> Phone: +27 123 456 789</p>
          <p><i class="fas fa-map-marker-alt"></i> Address: 123 Winter Lane, Cape Town</p>
        </div>
      </div>
  
      <!-- Shop Now Section -->
      <section class="shop-now">
        <h3>Discover Our Collection</h3>
        <p>Browse our carefully curated selection of winter wear and stay warm in style. Our collection is just a click away!</p>
        <router-link to="/shop" class="btn btn-info">Shop Now</router-link>
      </section>
  
      <!-- Footer -->
      <footer class="footer text-center text-white">
        <div class="container">
          <p>&copy; 2025 Thrifted Winter Coats | 123 Winter Lane, Cape Town</p>
          <div class="social-links">
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: false,
        milestones: [
          { 
            id: 1,
            title: 'Our First Collection',
            description: 'We launched our first collection of winter wear in 2023, focused on bringing affordable and stylish coats to our community.',
            date: 'March 2023'
          },
          { 
            id: 2,
            title: 'Sustainability Commitment',
            description: 'In 2024, we made a commitment to sustainability by ensuring all of our winter wear is either upcycled or made from eco-friendly materials.',
            date: 'January 2024'
          },
          { 
            id: 3,
            title: 'Our First Collection',
            description: 'We launched our first collection of winter wear in 2023, focused on bringing affordable and stylish coats to our community.',
            date: 'March 2023'
          },
          { 
            id: 4,
            title: 'Our First Collection',
            description: 'We launched our first collection of winter wear in 2023, focused on bringing affordable and stylish coats to our community.',
            date: 'March 2023'
          },
        ]
      };
    },
    methods: {
      openModal() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
      }
    }
  };
  </script>
  

  
<style scoped>
  /*Modal styling*/
  .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease-out;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
.btn{
    font-family: 'Playfair Display', serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-50%);
  }
  to {
    transform: translateY(0);
  }
}

/* Animation for the page */
.about-header {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Other page animations */
.milestones {
  animation: fadeInUp 1s ease-out;
}

.shop-now {
  animation: fadeInUp 1s ease-out;
  font-family: 'Playfair Display', serif;
}

  /* Colors */
  :root {
    --beige: #D2B48C;
    --brown: #8B4513;
    --dark-brown: #5C3317;
    --text-dark: #3B2F2F;
    --text-light: #F5F5DC;
  }
  
  /* About Section */
.about-header {
    position: relative;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../assets/background02.jpeg') no-repeat center center;
    background-size: cover;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
.about-header .container {
    text-align: center;
    font-family: 'Playfair Display', serif;
  }
  
.about-title {
    font-size: 4rem;
    font-weight: 700;
    color: var(--text-light);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
.about-subtitle {
    font-size: 2rem;
    font-weight: 400;
    color: var(--text-light);
  }
  
.about-description {
    font-size: 1.2rem;
    margin-top: 15px;
    color: var(--text-light);
}
  
.about-buttons {
    margin-top: 30px;
    color: #28a745;
}
  
.about-buttons .btn {
    margin: 10px;
    padding: 12px 25px;
    font-size: 1.1rem;
    border-radius: 5px;
    transition: background-color 0.3s;
}
  
.about-buttons .btn-primary {
    background-color: #007bff;
}
  
.about-buttons .btn-primary:hover {
    background-color: #0056b3;
}
  
.about-buttons .btn-success {
    background-color: #28a745;
}
  
.about-buttons .btn-success:hover {
    background-color: #218838;
}
  
/* Shop Now Section */
.shop-now {
    background-color: var(--brown);
    padding: 4rem 0;
    text-align: center;
    color: var(--text-light);
}
  
.shop-now h3 {
    font-size: 2rem;
    margin-bottom: 15px;
  }
  
.shop-now p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
.shop-now .btn-info {
    background-color: #17a2b8;
    padding: 12px 25px;
    font-size: 1.1rem;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
.shop-now .btn-info:hover {
    background-color: #138496;
  }
  
  /* Image Slot for Future Use */
.journey-image-slot {
    margin: 2rem 0;
    text-align: center;
  }
  
.journey-slot-image {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
  
  /* Milestones Section */
.milestones {
    background-color: var(--brown);
    padding: 3rem 0;
    text-align: center;
    color: var(--text-light);
    margin: 20px;
  }
  
.milestones h3 {
    font-size: 2rem;
    margin-bottom: 20px;
    font-family: 'Playfair Display', serif;
  }
  
.milestone-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
.milestone-item {
    background-color: var(--text-light);
    padding: 1.5rem;
    margin: 10px;
    border-radius: 5px;
    width: 250px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
.milestone-item h4 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: grey;
    font-family: 'Poppins', sans-serif;
  }
  
.milestone-item p {
    font-size: 1rem;
    color: var(--text-dark);
    font-family: sans-serif;
    font-family: 'Poppins', sans-serif;
  }
  
.milestone-item .date {
    font-size: 0.9rem;
    color: var(--dark-brown);
  }
  
  /* Footer */
.footer {
    background-color: black;
    padding: 20px 0;
  }
  
.footer p {
    font-size: 1rem;
    color: var(--text-light);
  }
  
.footer .social-links a {
    margin: 0 10px;
    color: var(--text-light);
    font-size: 1.5rem;
  }
  </style>
  