<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero text-white d-flex align-items-center">
      <div class="container text-center">
        <h4>Stay Warm, Look Stylish</h4>
        <h1>Your Winter Wardrobe</h1>
        <h1>Essentials</h1>
        <p>Thrifted coats with stories to tell.</p>
        <div class="hero-images">
          <img v-for="(image, index) in heroImages" :key="index" :src="image" class="hero-img">
        </div>
      </div>
    </section>

    <!-- Our Journey to Warmth and Style -->
    <section class="our-journey container d-flex align-items-center">
      <img :src="journeyImage" class="journey-img" alt="Our Journey">
      <div class="journey-text">
        <h2>Our Journey to Warmth and Style</h2>
        <p>At Thrifted Warmth, we specialize in high-quality imported European winter coats with a strong emphasis on reusing and recycling. Our collection features a wide range of options for men, women, and kids, including puffer jackets and leather coats, all offered at affordable prices ranging from R300 to R600. With a commitment to sustainability and style, we aim to provide warmth while protecting the environment.</p>
      </div>
    </section>

    <!-- Explore Our Variety -->
    <section  class="explore-variety container text-center">
      <h1>Explore Our Variety</h1>
      <br>
      <div class="row">
        <div v-for="(category, index) in catalogues" :key="index" class="col-md-4">
          <div class="card">
            <img :src="category.image" class="card-img-top" :alt="category.name">
            <div class="card-body">
              <h5 class="card-title">{{ category.name }}</h5>
              <h5 class="subtitle">{{ category.subtitle }}</h5>
              <p class="card-text">{{ category.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <router-link to="/products" class="btn shop-now-btn">Shop Now</router-link>
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
      heroImages: [
        require('../assets/Coat01.png'), // path to your image
        require('../assets/Coat02.png'),
        require('../assets/Coat03.png'),
        require('../assets/Coat04.png'),
        require('../assets/Coat05.png'),
        require('../assets/Coat06.png')
       
      ],
      journeyImage: require('../assets/journeyImg.jpg'),
      catalogues: [
        { name: "Women's Collection", subtitle:"Chic & Cozy", description: "Indulge in our women's selection that combines elegance with comfort. Whether you're looking for a trendy puffer jacket or a classic leather coat, we have the perfect choice to keep you stylish and snug.", image: require('../assets/Coat02.png') },
        { name: "Men's Collection", subtitle:" Stylish and Practical", description: "Sophisticated and warm, just for him.", image: require('../assets/Coat06.png')  },
        { name: "Kids' Corner",subtitle:"Adorable and warm ",  description: "Cute and cozy for the little ones.", image:require('../assets/Coat09.png')  }
      ]
    };
  }
};
</script>

<style scoped>
/* Colors */
:root {
  --beige: #D2B48C;
  --brown: #8B4513;
  --dark-brown: #5C3317;
  --text-dark: #3B2F2F;
  --text-light: #F5F5DC;
}

/* Hero Section */
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-image: url("../assets/background02.jpeg");
  background-color: #D2B48C;
  background-size: cover;
  background-position: center;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hero h1 {
  font-size: 3rem;
  font-weight: bold;
  color:white;
}
.hero p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
.hero-images {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
}
.hero-img {
  width: 100px;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
/* Our Journey Section */
.our-journey {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 50px 0;
}
.journey-img {
  width: 350px;
  height: 350px;
  border-radius: 10px;
}
.journey-text {
  width: 50%;
}
.journey-text h2 {
  color: var(--brown);
}
.journey-text p {
  color: var(--text-dark);
}

/* Explore Our Variety */
.explore-variety {
  padding: 50px 0;
}
.card {
  border: none;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}
.card:hover {
  transform: scale(1.05);
}
.card-title {
  color: var(--dark-brown);
}
.card-text {
  color: var(--text-dark);
}
.shop-now-btn {
  background: var(--brown);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background 0.3s ease;
}
.shop-now-btn:hover {
  background: var(--dark-brown);
}

/* Footer */
.footer {
  background: var(--dark-brown);
  padding: 20px;
  color:#8B4513
}
.footer p {
  color: var(--text-light);
}
.social-links a {
  color: var(--text-light);
  font-size: 20px;
  margin: 0 10px;
}
</style>
