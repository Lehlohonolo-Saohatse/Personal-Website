// script.js
document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/blog')
      .then(response => response.json())
      .then(posts => {
          const postGrid = document.querySelector('.post-grid');
          posts.forEach(post => {
              const postCard = document.createElement('article');
              postCard.classList.add('post-card');
              postCard.innerHTML = `
                  <h3>${post.title}</h3>
                  <p class="post-excerpt">${post.excerpt}</p>
                  <a href="#" class="read-more">Read More</a>
              `;
              postGrid.appendChild(postCard);
          });
      });

  fetch('/api/projects')
      .then(response => response.json())
      .then(projects => {
          const projectGrid = document.querySelector('.project-grid');
          projects.forEach(project => {
              const projectCard = document.createElement('article');
              projectCard.classList.add('project-card');
              projectCard.innerHTML = `
                  <h3>${project.title}</h3>
                  <p class="project-description">${project.description}</p>
                  <a href="${project.link}" class="view-project">View Project</a>
              `;
              projectGrid.appendChild(projectCard);
          });
      });
});
