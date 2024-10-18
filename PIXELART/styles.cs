body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f0f0f0;
    margin: 0;
    padding: 20px;
}

h1 {
    color: #333;
}

#color-picker {
    margin-bottom: 10px;
}

#pixel-canvas {
    display: grid;
    grid-template-columns: repeat(20, 20px);
    grid-template-rows: repeat(20, 20px);
    gap: 1px;
    margin-bottom: 10px;
}

.pixel {
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    cursor: pointer;
}

#clear {
    padding: 10px 20px;
    background-color: #ff6b6b;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
}

#clear:hover {
    background-color: #ff4949;
}
