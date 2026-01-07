// Dados dos projetos para os modais
const projectsData = {
  mre: {
    title: "Previsão Orçamentária — MRE",
    category: "Freelance",
    problem: "O Ministério das Relações Exteriores enfrentava dificuldades para prever gastos orçamentários de postos internacionais, resultando em estimativas manuais imprecisas e planejamento financeiro ineficiente.",
    solution: "Desenvolvi um pipeline completo de Machine Learning que coleta, processa e analisa dados históricos de múltiplos postos. O sistema utiliza modelos ensemble (Random Forest + XGBoost) com feature engineering avançado para capturar padrões sazonais e variações regionais.",
    results: "Alcançamos 89% de acurácia nas previsões (R² = 0.89), reduzindo o tempo de análise em 40% e permitindo planejamento orçamentário mais preciso. O sistema processa dados de 100+ postos automaticamente.",
    tech: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "SQL", "Power BI", "Azure"],
    github: "#"
  },
  gestao: {
    title: "Sistema de Gestão Interna",
    category: "Freelance",
    problem: "Empresa lidava com dados fragmentados em múltiplas planilhas Excel, causando inconsistências, erros manuais e dificuldade na geração de relatórios consolidados entre 3 departamentos.",
    solution: "Construí uma plataforma web completa com Django que centraliza gestão de estoque, finanças e relatórios. Sistema inclui autenticação por departamento, API REST para integrações, dashboard interativo e exportação automática de relatórios.",
    results: "Eliminação completa de planilhas manuais, redução de 40% no tempo operacional, aumento de 60% na precisão dos dados e economia estimada de 15% em custos operacionais. Sistema atende 50+ usuários simultâneos.",
    tech: ["Django", "PostgreSQL", "Docker", "Redis", "Celery", "JavaScript", "Bootstrap", "Nginx"],
    github: "#"
  },
  imoveis: {
    title: "Previsão de Preços de Imóveis",
    category: "Autoral",
    problem: "Determinar preços justos de imóveis é desafiador devido à quantidade de variáveis envolvidas (localização, tamanho, amenidades, mercado). Métodos tradicionais são lentos e imprecisos.",
    solution: "Criei um modelo de regressão com feature engineering extensivo incluindo análise geoespacial, variáveis derivadas de amenidades próximas e engenharia de features temporais. Utilizei ensemble de modelos com validação cruzada estratificada por região.",
    results: "Modelo atingiu R² = 0.87 com erro médio absoluto de apenas 8%. Sistema captura nuances de valorização por região e consegue explicar 87% da variação nos preços. Deploy via API REST para uso em aplicações.",
    tech: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "GeoPandas", "Matplotlib", "Flask", "Docker"],
    github: "#"
  },
  scraping: {
    title: "Sistema de Automação & Web Scraping",
    category: "Autoral",
    problem: "Coleta manual de dados de múltiplas fontes web é extremamente time-consuming, propensa a erros e impede análises em tempo real. Empresas precisam de dados atualizados constantemente.",
    solution: "Desenvolvi sistema robusto de web scraping com arquitetura escalável usando Scrapy. Inclui rotação de proxies, bypass de anti-bot, parsing inteligente com IA, validação de dados e armazenamento estruturado. Sistema opera 24/7 com monitoramento automatizado.",
    results: "Processamento de 100k+ registros diariamente com 99.7% de uptime. Redução de custos de coleta de dados em 85% e disponibilização de insights em tempo real. Sistema detecta e adapta-se automaticamente a mudanças nas fontes.",
    tech: ["Python", "Scrapy", "Selenium", "BeautifulSoup", "MongoDB", "Redis", "Docker", "Airflow"],
    github: "#"
  }
};

document.addEventListener('DOMContentLoaded', function () {
  
  // ========== INICIALIZAR PARTÍCULAS (Neural Network Constellation) ==========
  if (typeof tsParticles !== 'undefined') {
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 20 : 40;
    
    tsParticles.load("particles-js", {
      fpsLimit: 60,
      particles: {
        number: {
          value: particleCount,
          density: {
            enable: true,
            area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.6,
          random: true,
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.4,
            sync: false
          }
        },
        size: {
          value: 4,
          random: {
            enable: true,
            minimumValue: 2
          },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 2,
            sync: false
          }
        },
        links: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1.5,
          shadow: {
            enable: true,
            color: "#ffffff",
            blur: 5
          },
          triangles: {
            enable: false
          },
          // Pulsos de luz viajando
          warp: true
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "out"
          },
          attract: {
            enable: true,
            distance: 200,
            rotate: {
              x: 1000,
              y: 1000
            }
          },
          trail: {
            enable: false,
            length: 5,
            fillColor: "#ffffff"
          }
        }
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: ["grab", "bubble"],
            parallax: {
              enable: true,
              force: 100,
              smooth: 20
            }
          },
          onClick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              opacity: 0.6,
              color: "#ffffff"
            }
          },
          bubble: {
            distance: 150,
            size: 6,
            duration: 2,
            opacity: 0.5
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 100,
            duration: 0.4
          }
        }
      },
      detectRetina: true,
      background: {
        color: "transparent"
      }
    });
  }
  
  // ========== REVEAL SECTIONS ==========
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => observer.observe(r));

  // ========== BACK TO TOP ==========
  const back = document.getElementById('backToTop');
  const showAfter = 400;
  window.addEventListener('scroll', () => {
    if (!back) return;
    if (window.scrollY > showAfter) back.classList.add('visible');
    else back.classList.remove('visible');
  });
  if (back) {
    back.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ========== FILTROS DE PROJETOS ==========
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-showcase-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active de todos
      filterBtns.forEach(b => b.classList.remove('active'));
      // Adiciona active no clicado
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.classList.remove('hidden');
          }, 10);
        } else {
          card.classList.add('hidden');
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // ========== MODAL DE PROJETOS ==========
  const modal = document.getElementById('projectModal');
  const modalClose = document.querySelector('.modal-close');
  const detailBtns = document.querySelectorAll('.btn-details');

  // Abrir modal
  detailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  // Também permite clicar no card inteiro
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      openModal(projectId);
    });
  });

  function openModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    // Preencher modal
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalCategory').textContent = project.category;
    document.getElementById('modalCategory').className = 'category-tag' + 
      (project.category === 'Autoral' ? ' autoral' : '');
    document.getElementById('modalProblem').textContent = project.problem;
    document.getElementById('modalSolution').textContent = project.solution;
    document.getElementById('modalResults').textContent = project.results;

    // Tech tags
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = '';
    project.tech.forEach(tech => {
      const tag = document.createElement('span');
      tag.className = 'tech-tag';
      tag.textContent = tech;
      techContainer.appendChild(tag);
    });

    // Link do GitHub
    const githubLink = document.getElementById('modalGithub');
    if (githubLink) {
      githubLink.href = project.github || '#';
    }

    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Fechar modal
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // Fechar ao clicar fora
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // ========== KEYBOARD ACCESSIBILITY ==========
  function handleFirstTab(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('show-focus');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }
  window.addEventListener('keydown', handleFirstTab);

  // ========== SMOOTH SCROLL PARA LINKS ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

