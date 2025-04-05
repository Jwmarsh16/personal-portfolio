import React, { useState, useEffect, useRef } from 'react';
import '../Skills.css';
import {
  FaPython, FaNodeJs, FaReact, FaGithub, FaCloud, FaCubes, FaLayerGroup, FaCogs, FaTasks,
  FaClipboardCheck, FaLock, FaKey, FaHtml5, FaCloudDownloadAlt, FaDatabase, FaEdit,
  FaTerminal, FaLockOpen, FaCookie, FaAws, FaFlask as FaFlaskFA, FaCheckCircle,
  FaShieldAlt, FaLaptopCode, FaPause, FaPlay
} from 'react-icons/fa';
import {
  SiJavascript, SiFlask, SiRedux, SiPostgresql, SiVite, SiPostman,
  SiGnubash, SiJson, SiMui
} from 'react-icons/si';

function Skills() {
  // Define the skill arrays (unchanged)
  const topRow = [
    { name: 'Python', icon: <FaPython />, color: '#306998' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'SQL', icon: <FaDatabase />, color: '#336791' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Flask', icon: <SiFlask />, color: '#000000' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
    { name: 'Git & GitHub', icon: <FaGithub />, color: '#181717' },
    { name: 'REST APIs', icon: <FaCloud />, color: '#4b8bbe' },
    { name: 'OOP', icon: <FaCubes />, color: '#C71585' },
    { name: 'Full Stack Development', icon: <FaLayerGroup />, color: '#808080' }
  ];

  const middleRow = [
    { name: 'CI/CD Pipelines', icon: <FaCogs />, color: '#FF9900' },
    { name: 'Agile Methodology', icon: <FaTasks />, color: '#0052CC' },
    { name: 'Unit Testing', icon: <FaClipboardCheck />, color: '#E5E5E5' },
    { name: 'Bcrypt', icon: <FaLock />, color: '#2F4F4F' },
    { name: 'JWT', icon: <FaKey />, color: '#D63AFF' },
    { name: 'Flask-JWT-Extended', icon: <FaKey />, color: '#D63AFF' },
    { name: 'HTML & CSS', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'Axios', icon: <FaCloudDownloadAlt />, color: '#671ddf' },
    { name: 'SQLAlchemy', icon: <FaDatabase />, color: '#CE4441' },
    { name: 'CRUD Ops', icon: <FaEdit />, color: '#fcba03' },
    { name: 'Linux', icon: <FaTerminal />, color: '#333333' },
    { name: 'Vite', icon: <SiVite />, color: '#646CFF' }
  ];

  const bottomRow = [
    { name: 'OAuth', icon: <FaLockOpen />, color: '#3C3C3D' },
    { name: 'HTTP-Only Cookies', icon: <FaCookie />, color: '#D2691E' },
    { name: 'AWS S3', icon: <FaAws />, color: '#FF9900' },
    { name: 'Render', icon: <FaCloud />, color: '#009BFF' },
    { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
    { name: 'Pytest', icon: <FaFlaskFA />, color: '#3776AB' },
    { name: 'Input Validation', icon: <FaCheckCircle />, color: '#008000' },
    { name: 'Bash', icon: <SiGnubash />, color: '#4EAA25' },
    { name: 'JSON', icon: <SiJson />, color: '#222222' },
    { name: 'Material-UI', icon: <SiMui />, color: '#0081CB' },
    { name: 'SAST/DAST', icon: <FaShieldAlt />, color: '#990000' },
    { name: 'VS Code', icon: <FaLaptopCode />, color: '#007ACC' }
  ];

  // Global controls: pause and dragging
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);

  // Dimensions & scrolling state
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  const [topContentWidth, setTopContentWidth] = useState(0);
  const [middleContentWidth, setMiddleContentWidth] = useState(0);
  const [bottomContentWidth, setBottomContentWidth] = useState(0);

  // We'll use a common content width so that all rows share the same cycle.
  const [commonContentWidth, setCommonContentWidth] = useState(0);
  // Cycle distance: the total distance that needs to be scrolled before restarting.
  const [cycleDistance, setCycleDistance] = useState(0);

  // Auto offsets for top/bottom and middle rows.
  // For top/bottom: range is from containerWidth (start off right) to -2*commonContentWidth.
  // For middle: range is from -2*commonContentWidth (start off left) to containerWidth.
  const [autoOffsetTop, setAutoOffsetTop] = useState(null);
  const [autoOffsetMiddle, setAutoOffsetMiddle] = useState(null);

  // Refs for measuring content widths and for drag events.
  const topRef = useRef(null);
  const middleRef = useRef(null);
  const bottomRef = useRef(null);

  // Update container width on window resize.
  useEffect(() => {
    const updateDimensions = () => setContainerWidth(window.innerWidth);
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Measure one copy of each row's content width (since we duplicate them).
  useEffect(() => {
    if (topRef.current) {
      setTopContentWidth(topRef.current.scrollWidth / 2);
    }
    if (middleRef.current) {
      setMiddleContentWidth(middleRef.current.scrollWidth / 2);
    }
    if (bottomRef.current) {
      setBottomContentWidth(bottomRef.current.scrollWidth / 2);
    }
  }, [containerWidth]);

  // Once we know the content widths, compute the commonContentWidth and cycleDistance,
  // then initialize auto offsets.
  useEffect(() => {
    if (topContentWidth && middleContentWidth && bottomContentWidth) {
      const maxWidth = Math.max(topContentWidth, middleContentWidth, bottomContentWidth);
      setCommonContentWidth(maxWidth);
      const newCycleDistance = containerWidth + 2 * maxWidth;
      setCycleDistance(newCycleDistance);
      // Initialize top & bottom rows to start off the right side.
      if (autoOffsetTop === null) {
        setAutoOffsetTop(containerWidth);
      }
      // Initialize middle row to start off the left side.
      if (autoOffsetMiddle === null) {
        setAutoOffsetMiddle(-2 * maxWidth);
      }
    }
  }, [topContentWidth, middleContentWidth, bottomContentWidth, containerWidth, autoOffsetTop, autoOffsetMiddle]);

  // Animation loop to update auto offsets when not paused or dragging.
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const speed = 100; // pixels per second

  const animate = time => {
    if (previousTimeRef.current !== undefined && !isPaused && !isDragging && cycleDistance) {
      const deltaTime = (time - previousTimeRef.current) / 1000;
      // Top & bottom rows (scrolling left)
      setAutoOffsetTop(prev => {
        if (prev === null) return prev;
        let newOffset = prev - speed * deltaTime;
        if (newOffset <= -2 * commonContentWidth) {
          newOffset += cycleDistance;
        }
        return newOffset;
      });
      // Middle row (scrolling right)
      setAutoOffsetMiddle(prev => {
        if (prev === null) return prev;
        let newOffset = prev + speed * deltaTime;
        if (newOffset >= containerWidth) {
          newOffset -= cycleDistance;
        }
        return newOffset;
      });
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPaused, isDragging, cycleDistance, containerWidth, commonContentWidth]);

  // Drag handlers.
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragDelta(0);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setDragDelta(e.clientX - dragStartX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging && cycleDistance) {
      // Update auto offsets based on drag, normalizing within the cycle.
      setAutoOffsetTop(prev => {
        let newOffset = prev + dragDelta;
        newOffset = ((newOffset + 2 * commonContentWidth) % cycleDistance + cycleDistance) % cycleDistance - 2 * commonContentWidth;
        return newOffset;
      });
      setAutoOffsetMiddle(prev => {
        let newOffset = prev - dragDelta; // middle moves opposite to drag
        newOffset = ((newOffset + 2 * commonContentWidth) % cycleDistance + cycleDistance) % cycleDistance - 2 * commonContentWidth;
        return newOffset;
      });
      setIsDragging(false);
      setDragDelta(0);
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragDelta]);

  // Compute effective offsets (including drag delta).
  const effectiveOffsetTop = autoOffsetTop !== null ? autoOffsetTop + dragDelta : 0;
  const effectiveOffsetBottom = effectiveOffsetTop; // same as top
  const effectiveOffsetMiddle = autoOffsetMiddle !== null ? autoOffsetMiddle - dragDelta : 0;

  // Render a row.
  // For top/bottom rows, we use the effective offset as-is.
  // For the middle row, its auto offset already ensures it starts fully off-screen to the left.
  const renderRow = (skills, direction, label, effectiveOffset, ref) => (
    <div className={`skills-row ${direction}`} onMouseDown={handleMouseDown}>
      <div className="scroll-track" ref={ref} style={{ transform: `translateX(${effectiveOffset}px)` }}>
        {[...skills, ...skills].map((skill, index) => (
          <div key={`${label}-${index}`} className="skill-card">
            <span className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const handlePausePlay = () => {
    setIsPaused(!isPaused);
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2></h2>
        <div className="skills-controls">
          <button onClick={handlePausePlay}>
            {isPaused ? <FaPlay /> : <FaPause />} {isPaused ? 'Play' : 'Pause'}
          </button>
        </div>
        {renderRow(topRow, 'scroll-left', 'top', effectiveOffsetTop, topRef)}
        {renderRow(middleRow, 'scroll-right', 'middle', effectiveOffsetMiddle, middleRef)}
        {renderRow(bottomRow, 'scroll-left', 'bottom', effectiveOffsetBottom, bottomRef)}
      </div>
    </section>
  );
}

export default Skills;
