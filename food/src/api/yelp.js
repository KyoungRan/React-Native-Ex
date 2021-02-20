import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 9vzWXzskdxzfB1PGRkal6VMwwkGEtGPhzDA4HX9ocrbDIT8w4PAwcvzYKguoP1nuf1QQFvqfrg1R9-0OSKHIEA8KShlQWqpST7GDPBo-qatxUiFb7KIoyouBdBEdYHYx'
  }
});