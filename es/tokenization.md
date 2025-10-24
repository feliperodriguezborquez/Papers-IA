---
layout: default
lang: es
title: "Tokenización: El Lenguaje de los LLMs"
---
<div class="paper-detail">
  <div class="post-header">
    <a href="./">&larr; Volver a la lista</a>
    {% if other_lang_page %}
      <a href="{{ other_lang_url | relative_url }}" class="language-switch-button">{{ other_lang_text }}</a>
    {% endif %}
  </div>

  <h1>{{ page.title }}</h1>
  <p><em>IA en 5 min</em></p>

  <p>Hemos hablado de que los LLMs predicen el siguiente <span class="highlight-term" data-term-id="token">"token"</span>, pero ¿qué es exactamente un <span class="highlight-term" data-term-id="token">token</span>? Entender este concepto es fundamental, porque es literalmente cómo las máquinas "leen" y "escriben" el lenguaje humano.</p>

  <hr>

  <h2>TL;DR</h2>
  <ul>
    <li><strong>Definición:</strong> La tokenización es el proceso de dividir un texto en unidades más pequeñas llamadas <span class="highlight-term" data-term-id="token">tokens</span>.</li>
    <li><strong>¿Qué es un <span class="highlight-term" data-term-id="token">Token</span>?:</strong> No es una palabra ni una letra. Es una pieza de texto (una palabra común, una sub-palabra, un signo de puntuación) que el modelo conoce.</li>
    <li><strong>El Objetivo:</strong> Convertir el lenguaje humano en números que un modelo de IA pueda procesar, de manera eficiente y manejando un vocabulario masivo.</li>
  </ul>

  <hr>

  <h2>1. ¿Por qué no usar simplemente palabras?</h2>

  <p>La primera idea que se nos ocurre es: ¿por qué no dividir el texto en palabras? El problema es que los idiomas son increíblemente complejos.</p>
  <ul>
    <li><strong>Vocabulario Infinito:</strong> Piensa en todas las conjugaciones verbales (correr, corría, correré), plurales (gato, gatos), y nuevas palabras que se inventan. Un vocabulario basado en palabras sería gigantesco e inmanejable.</li>
    <li><strong>Palabras Raras:</strong> ¿Qué hace el modelo si se encuentra con una palabra que nunca ha visto, como "supercalifragilisticoespialidoso"? Con un vocabulario de palabras, no sabría cómo manejarla.</li>
  </ul>

  <p>La tokenización resuelve esto usando un vocabulario de tamaño fijo de <span class="highlight-term" data-term-id="token">tokens</span> que pueden combinarse para representar cualquier palabra.</p>

  <h2>2. ¿Cómo funciona la Tokenización?</h2>

  <p>Imagina que tienes un diccionario de 50,000 <span class="highlight-term" data-term-id="token">tokens</span> permitidos. Este diccionario no solo contiene palabras completas, sino también las partes más comunes de las palabras.</p>

  <p>Cuando el tokenizador recibe un texto, intenta dividirlo usando las piezas de su diccionario:</p>
  <ul>
    <li>La palabra <code>gato</code> es muy común, así que probablemente es un solo <span class="highlight-term" data-term-id="token">token</span>: <code>[gato]</code>.</li>
    <li>La palabra <code>tokenización</code> es menos común. El tokenizador podría dividirla en piezas que sí conoce: <code>[token]</code> + <code>[ización]</code>.</li>
    <li>Una palabra desconocida como <code>FelipeIA</code> se dividiría en <span class="highlight-term" data-term-id="token">tokens</span> aún más pequeños: <code>[F]</code> + <code>[elipe]</code> + <code>[IA]</code>.</li>
  </ul>

  <p>Cada <span class="highlight-term" data-term-id="token">token</span> en el diccionario tiene un número de identificación único (por ejemplo, <code>[gato]</code> podría ser el ID 534 y <code>[ización]</code> el ID 12980). Así, la frase "tokenización de gato" se convierte en una secuencia de números que el modelo puede entender: <code>[12980, 534]</code>.</p>

  <h2>3. Quédate con esto</h2>

  <p>La tokenización es el puente indispensable entre el lenguaje humano, caótico y en constante cambio, y el mundo estructurado y matemático de los modelos de IA. No es solo un detalle técnico; es la base que permite a los LLMs "leer" y procesar eficientemente la vasta extensión del conocimiento humano.</p>

  <p>La próxima vez que veas a un LLM generar texto, recuerda que no está pensando en palabras, sino que está eligiendo, uno por uno, el <span class="highlight-term" data-term-id="token">token</span> más probable de su enorme diccionario numérico.</p>

</div>

<!-- Datos para los menús interactivos (oculto para el usuario) -->
<div id="interactive-data" style="display: none;">
  <div data-term-id="token">
    <div class="post-info">
      <strong>Tokenización: El Lenguaje de los LLMs</strong><br>
      <em>Aprende qué es un token y por qué es la base para que los LLMs entiendan y generen texto.</em><br>
      <a href="{{ '/es/tokenization.html' | relative_url }}">Leer artículo &rarr;</a>
    </div>
  </div>
</div>