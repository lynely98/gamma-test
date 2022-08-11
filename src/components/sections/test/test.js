import { h, render, Component } from 'preact';
import { useState, useEffect } from 'preact/hooks';

const Test = () => {
  const [product, setProduct] = useState(null);
  useEffect(async () => {
    const data = await fetch('https://dummyjson.com/products/1').then(
      response => response.json(),
    );
    setProduct(data);
  }, []);

  return <span>{product?.title}</span>;
};

render(<Test />, document.getElementById('test'));
