import React from 'react';
import VisDevArtworks from '../components/VisDevArtworks';
import Layout from '../components/Layout';

const VisDev = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4 pb-20">
        <h1 className="text-4xl font-bold text-center text-black my-8">Visual Development</h1>
            <VisDevArtworks />
      </div>
    </Layout>
  );
};

export default VisDev;
