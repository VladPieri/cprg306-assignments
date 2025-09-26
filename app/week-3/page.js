import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="min-h-screen bg-black py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-6">
          Shopping List
        </h1>
        <ItemList />
      </div>
    </main>
  );
};

export default Page;

