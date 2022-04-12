mkdir -p ~/.streamlit/
echo "
[general]n
email = "kadariprathima4@gmail.com"n
" > ~/.streamlit/credentials.toml
echo "
[server]n
headless = truen
enableCORS=falsen
port = $PORTn
" > ~/.streamlit/config.toml
