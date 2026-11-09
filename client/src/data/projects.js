export const projects = [
  {
    slug: 'ask-flask',
    title: 'Ask-Flask',
    description: 'An AI chat application with streaming responses, saved conversations and pinned session memory.',
    contribution: 'I built the React chat UI, Flask streaming API, database persistence and retrieval pipeline.',
    stack: ['React', 'Flask', 'PostgreSQL', 'OpenAI API', 'SSE', 'FAISS'],
    liveUrl: 'https://ask-flask.onrender.com/',
    codeUrl: 'https://github.com/Jwmarsh16/ask-flask',
    role: 'Sole developer. I designed the application, implemented the frontend and API, and configured tests, CI and deployment.',
    decision: 'I used server-sent events to stream responses and stored sessions and messages in a database. A pinned summary and a separate FAISS retrieval pipeline manage conversation context and document retrieval.',
    result: 'The implemented flow includes saved conversations, session renaming, JSON and Markdown exports, and visible feedback when a request limit is reached.',
    problem: 'A useful chat app needs more than a prompt box: conversations need to survive a refresh, responses need to feel responsive, and API failures need understandable feedback.',
    features: [
      'Streaming chat with a JSON fallback',
      'Session creation, renaming, deletion and transcript export',
      'Pinned session summaries and a document retrieval pipeline',
      'Rate limits, request IDs and structured error responses'
    ],
    demoSteps: [
      'Create a session using the plus button in the sessions sidebar.',
      'Send a short prompt and watch the response arrive in the conversation.',
      'Rename the session or export its transcript as JSON or Markdown.'
    ],
    demoNote: 'The hosted demo may take a moment to start. Chat depends on the configured API and request budget; if it is unavailable, the screenshots show the main flows.',
    screenshots: [
      {
        src: '/images/ask-flask2.webp', width: 1600, height: 771,
        alt: 'Ask-Flask conversation alongside saved sessions and a pinned-memory example.',
        caption: 'Saved sessions and a conversation demonstrating pinned session memory.'
      },
      {
        src: '/images/ask-flask3.webp', width: 1484, height: 911,
        alt: 'Ask-Flask chat showing a request limit message and a request reference.',
        caption: 'Request-limit feedback explains why a message failed and includes a reference for debugging.'
      },
      {
        src: '/images/ask-flask4.webp', width: 1600, height: 850,
        alt: 'An exported Ask-Flask session opened as JSON in a code editor.',
        caption: 'A session exported as JSON, including message roles, content and timestamps.'
      }
    ],
    technicalNotes: [
      {
        title: 'Streaming and persistence',
        text: 'React and Vite provide the chat interface. Flask handles streaming and JSON responses; SQLAlchemy stores sessions and messages in PostgreSQL, with SQLite for local development.'
      },
      {
        title: 'Context and retrieval',
        text: 'The retrieval pipeline chunks documents, applies PII redaction, creates embeddings and searches a FAISS index. Pinned summaries provide a separate way to retain session context.'
      },
      {
        title: 'Reliability and tooling',
        text: 'Flask-Limiter controls request budgets. Security headers, structured logs and request IDs support operations. Pytest, Vitest and GitHub Actions cover backend and frontend checks.'
      }
    ]
  },
  {
    slug: 'fantasy-football-research-hub',
    title: 'Fantasy Football Research Hub',
    description: 'A fantasy football research app that combines player discovery with personal rankings and community reviews.',
    contribution: 'I designed the relational data model and built the Flask API, React/Redux interface, authentication and S3 image flow.',
    stack: ['React', 'Redux Toolkit', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'AWS S3'],
    liveUrl: 'https://fantasy-football-research-hub.onrender.com',
    codeUrl: 'https://github.com/Jwmarsh16/fantasy-football-research-project',
    role: 'Sole developer. I built the data model, REST API, authentication, profile image handling and React/Redux interface.',
    decision: 'I modeled user/player ranking relationships in SQLAlchemy and used Redux Toolkit for shared UI state. Profile images upload through Flask to S3; the API generates signed URLs for image retrieval.',
    result: 'The app brings player filtering, personal rankings, written reviews and profile photos into one interface. The profile uses a virtualized review list to limit rendered rows.',
    problem: 'Fantasy research is spread across statistics, commentary and individual opinions. I wanted a single place to browse players and record or compare personal rankings and reviews.',
    features: [
      'Player discovery with position, team and sorting controls',
      'Create, read, update and delete rankings and reviews',
      'Cookie-based JWT authentication and password hashing',
      'Server-side profile image uploads and signed S3 image URLs'
    ],
    demoSteps: [
      'Open Players to explore the player list and its position, team and sorting controls.',
      'Open a player to inspect rankings and written reviews.',
      'Sign in or create an account to save your own rankings, reviews and profile details.'
    ],
    demoNote: 'Account features require sign-in. The screenshots below show the player and profile views without requiring an account.',
    screenshots: [
      {
        src: '/images/fantasy-football-2.webp', width: 1600, height: 766,
        alt: 'Fantasy Football Research Hub player cards with position, team and sorting filters.',
        caption: 'Player discovery combines position and team filters with player ranking summaries.'
      },
      {
        src: '/images/fantasy-football-1.webp', width: 1600, height: 769,
        alt: 'Fantasy Football Research Hub home view with football news and a top-five player ranking sidebar.',
        caption: 'The home view brings football news and player ranking summaries together.'
      },
      {
        src: '/images/fantasy-football-4.webp', width: 1600, height: 765,
        alt: 'A user profile with a profile photo upload control and a reviews and rankings section.',
        caption: 'The profile view provides a photo upload and access to the user’s reviews and rankings.'
      }
    ],
    technicalNotes: [
      {
        title: 'Relational data and shared state',
        text: 'Flask REST endpoints and SQLAlchemy models connect users, players, rankings and reviews. React and Redux Toolkit coordinate player filters and user state.'
      },
      {
        title: 'Authentication and image storage',
        text: 'JWTs use HTTP-only cookies and passwords are hashed with bcrypt. The backend uploads profile images to S3 with upload_fileobj and creates signed get_object URLs to retrieve them.'
      },
      {
        title: 'List rendering',
        text: 'The profile’s desktop review list uses react-window to render a window of rows instead of mounting every review at once.'
      }
    ]
  },
  {
    slug: 'algorithm-visualizer',
    title: 'Algorithm Visualizer',
    description: 'An interactive pathfinding playground for exploring A*, Dijkstra, breadth-first search and depth-first search.',
    contribution: 'I implemented the algorithms, editable grid, playback controls and side-by-side comparison interface.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS', 'Pathfinding'],
    liveUrl: 'https://pathfinding-algorithm-asba.onrender.com',
    codeUrl: 'https://github.com/Jwmarsh16/pathfinding-algorithm',
    role: 'Sole developer. I implemented the algorithms, designed the grid states and built the controls for running and comparing searches.',
    decision: 'I represented traversal as visible grid states and exposed play, step and back controls. Comparison mode runs two selected algorithms against the same grid layout.',
    result: 'Users can build a layout, inspect visited nodes and resulting paths, and compare algorithms side by side. Maze generation adds more complex scenarios to explore.',
    problem: 'Pathfinding is hard to understand from pseudocode alone. I wanted learners to see how different search strategies explore the same obstacles and endpoints.',
    features: [
      'Editable walls and start/end positions',
      'A*, Dijkstra, breadth-first search and depth-first search',
      'Play, step, back, speed and reset controls',
      'Side-by-side comparison and generated mazes'
    ],
    demoSteps: [
      'Choose an algorithm and use the grid to place walls or move the start and end nodes.',
      'Press Play to animate the search, or Step to inspect one stage at a time.',
      'Enable Comparison Mode, choose a second algorithm and run both on the same layout.'
    ],
    demoNote: 'The grid is easiest to explore on a larger screen. The Help button in the demo explains its editing controls.',
    screenshots: [
      {
        src: '/images/algorithm-visualizer1.webp', width: 1600, height: 712,
        alt: 'Breadth-first search visualized on a grid with walls, visited cells and a resulting path.',
        caption: 'Single-algorithm playback shows visited cells and the path through an editable grid.'
      },
      {
        src: '/images/algorithm-visualizer2.webp', width: 1600, height: 764,
        alt: 'Depth-first search and Dijkstra displayed side by side on the same grid layout.',
        caption: 'Comparison mode shows how depth-first search and Dijkstra traverse the same layout differently.'
      },
      {
        src: '/images/algorithm-visualizer3.webp', width: 1600, height: 766,
        alt: 'Two algorithm visualizations running through a generated Eller’s maze.',
        caption: 'Generated mazes provide more complex layouts for comparing traversal behavior.'
      }
    ],
    technicalNotes: [
      {
        title: 'Algorithms and visualization',
        text: 'JavaScript implements the search algorithms and playback logic. React renders the grid and controls, while CSS distinguishes walls, visited cells, endpoints and paths.'
      },
      {
        title: 'Comparisons and controls',
        text: 'Comparison mode uses the same layout for two algorithms. Playback speed, stepping and reset controls let the visitor inspect behavior rather than only watch a completed animation.'
      }
    ]
  }
]
