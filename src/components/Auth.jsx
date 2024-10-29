

import React from 'react';


const videos = [
  {
    id: 1,
    title: 'Video 1',
    src: '001.mp4'
  },
  {
    id: 2,
    title: 'Video 2',
    src: '002.mp4',
  },
  {
    id: 3,
    title: 'Video 3',
    src: '003.mp4',
  },
  {
    id: 4,
    title: 'Video 4',
    src: '004.mp4',
  },
  {
    id: 5,
    title: 'Video 5',
    src: '005.mp4',
  },
];

const VideoCard = ({ title, src }) => {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <video width="320" height="240" controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <a href={src} download style={styles.downloadButton}>
        Download
      </a>
    </div>
  );
};

const Vid = () => {
  return (
    <div style={styles.container}>
      {videos.map(video => (
        <VideoCard key={video.id} title={video.title} src={video.src} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  alignItems: 'center',
    // padding: '20px',
  },
  card: {
    border: '1px solid #247',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
    width: '320px',
    textAlign: 'center',
  },
  downloadButton: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '8px 16px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};
export default Vid;
