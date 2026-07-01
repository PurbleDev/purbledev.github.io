<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moja Pierwsza Strona</title>
    <style>
        /* Podstawowe style wizualne */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f7f6;
            color: #333;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        header {
            background-color: #2c3e50;
            color: white;
            text-align: center;
            padding: 2rem;
        }

        main {
            flex: 1;
            max-width: 800px;
            margin: 2rem auto;
            padding: 0 1rem;
        }

        .card {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        button {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            border-radius: 4px;
            cursor: pointer;
            transition: background 0.3s;
        }

        button:hover {
            background-color: #2980b9;
        }

        footer {
            background-color: #2c3e50;
            color: white;
            text-align: center;
            padding: 1rem;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>

    <header>
        <h1>Witaj na mojej stronie!</h1>
    </header>

    <main>
        <div class="card">
            <h2>O tej stronie</h2>
            <p>To jest prosty szablon HTML przygotowany specjalnie dla Ciebie. Możesz go dowolnie modyfikować i rozwijać.</p>
            <p>Kliknij poniższy przycisk, aby zobaczyć działanie prostego skryptu JavaScript.</p>
            <button id="btn">Kliknij mnie</button>
        </div>
    </main>

    <footer>
        <p>&copy; 2026 Stworzono z pomocą AI</p>
    </footer>

    <script>
        // Prosta interakcja po kliknięciu przycisku
        document.getElementById('btn').addEventListener('click', function() {
            alert('Cześć! Skrypt JavaScript działa poprawnie.');
        });
    </script>

</body>
</html>
