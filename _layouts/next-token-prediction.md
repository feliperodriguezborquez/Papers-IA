---
layout: default
lang: es
title: Predicción del Siguiente Token
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

  <p>Toda la magia que ves en ChatGPT, Claude o Llama se sostiene sobre una sola idea. Una idea sorprendentemente simple que, de hecho, usas todos los días.</p>
  <p>Hoy rompemos el motor por dentro.</p>

  <hr>

  <h2>TL;DR</h2>
  <ul>
    <li><strong>El Juego:</strong> Un LLM es un "autocompletador" con esteroides. Su único trabajo es adivinar la palabra (o "token") más probable que viene después de un texto.</li>
    <li><strong>El Bucle:</strong> Para escribir párrafos, repite este juego una y otra vez: predice una palabra, la añade al texto, y predice la siguiente.</li>
    <li><strong>El Resultado:</strong> La "inteligencia" emerge de la escala masiva de este simple proceso.</li>
  </ul>

  <hr>

  <h2>1. El Autocompletador Mágico</h2>

  <p>Cuando tu teléfono te sugiere "tarde" después de que escribes "Nos vemos a la...", está haciendo una predicción básica.</p>
  <p>Un LLM hace <em>exactamente lo mismo</em>, pero en lugar de haber sido entrenado con tus mensajes, ha sido entrenado con (casi) todo internet.</p>

  <p>Dale al modelo la frase:
  <code>"El gato se sentó sobre la..."</code></p>

  <p>El modelo no "piensa" en un gato. Simplemente ha procesado billones de frases y sabe estadísticamente qué suele venir después.</p>

  <blockquote>
    <p><strong>Mejora:</strong> He añadido un punto de fricción clave: la diferencia entre "palabra" y "token". Es esencial para la "claridad mental" que buscamos.</p>
  </blockquote>

  <h3>Un detalle clave: "Token" no es igual a "Palabra"</h3>

  <p>Rápidamente: los modelos no ven "palabras", ven "tokens". Piensa en un token como una sílaba o un trozo de palabra.</p>

  <ul>
    <li>La palabra <code>gato</code> es 1 token.</li>
    <li>La palabra <code>corriendo</code> pueden ser 2 tokens: <code>corr</code> + <code>iendo</code>.</li>
    <li>La palabra <code>Autopista</code> pueden ser 2 tokens: <code>Auto</code> + <code>pista</code>.</li>
  </ul>

  <p>Esto les da flexibilidad. Cuando decimos "predecir la siguiente palabra", técnicamente es "predecir el siguiente token". <strong>Es un matiz técnico, pero la idea del autocompletador sigue intacta.</strong></p>

  <h2>2. ¿Cómo Elige la Palabra? (La Distribución)</h2>

  <p>Aquí está el núcleo. El modelo no te da <em>una</em> respuesta. Te da una lista de la compra con las probabilidades de <em>todas</em> las palabras que conoce (¡decenas de miles!).</p>

  <p>Para <code>"El gato se sentó sobre la..."</code>, el modelo piensa:</p>

  <ul>
    <li><code>alfombra</code>: 40% de probabilidad</li>
    <li><code>silla</code>: 15% de probabilidad</li>
    <li><code>cama</code>: 10% de probabilidad</li>
    <li><code>mesa</code>: 8% de probabilidad</li>
    <li>...</li>
    <li><code>luna</code>: 0.0001% de probabilidad</li>
  </ul>

  <p>Luego, un mecanismo (llamado <em>sampling</em>) elige una de esa lista. Generalmente elige las de arriba, pero con un toque de azar (por eso si preguntas lo mismo dos veces, te da respuestas ligeramente distintas).</p>

  <h2>3. El Bucle Infinito (Autorregresión)</h2>

  <p>Aquí es donde la predicción de <em>un</em> token se convierte en un ensayo. El modelo usa un bucle increíblemente simple.</p>

  <ol>
    <li><strong>Input:</strong> <code>El gato se sentó sobre la</code></li>
    <li><strong>Predice:</strong> <code>alfombra</code></li>
    <li><strong>¡Se auto-alimenta!</strong> Ahora, su <em>nuevo</em> input es el texto original MÁS su propia predicción: <code>El gato se sentó sobre la alfombra</code></li>
    <li><strong>Predice el siguiente token:</strong> <code>.</code> (un punto)</li>
    <li><strong>Nuevo Input:</strong> <code>El gato se sentó sobre la alfombra.</code></li>
    <li><strong>Predice:</strong> <code>Estaba</code></li>
    <li><strong>Nuevo Input:</strong> <code>El gato se sentó sobre la alfombra. Estaba</code></li>
    <li><strong>Predice:</strong> <code>cansado</code></li>
    <li>...y así sigue.</li>
  </ol>

  <p>Este bucle de "usar tu propia salida como tu nueva entrada" tiene un nombre técnico: <strong>Autorregresión</strong>.</p>
  <p>Así de simple. Ese es el motor de casi todos los LLMs que usas. No hay más magia de fondo; es este bucle repetido a una velocidad vertiginosa. Ningún experto te lo puede rebatir.</p>

  <h2>4. Por qué esto NO es Magia (El Ecosistema)</h2>

  <blockquote>
    <p><strong>Mejora:</strong> He reestructurado esta sección para conectar directamente el "cómo funciona" (predicción estadística) con la crítica de "Stochastic Parrots". Hace que la idea sea más cohesiva.</p>
  </blockquote>

  <p>Entender esto te blinda contra muchos mitos.</p>
  <p>El modelo no "razona" como un humano. No "entiende" el concepto de 'gato'. Es un <strong class="highlight-term" data-bib-id="stochastic-parrots">"loro estocástico"</strong> (un loro estadístico) increíblemente sofisticado. Ha visto tantos patrones que puede <em>imitar</em> el razonamiento humano prediciendo la siguiente palabra más <em>plausible</em> en una cadena de "pensamiento".</p>
  <p>Casi todo lo que usas hoy (GPT-4, Llama 3, Claude 3) es <strong>autorregresivo</strong>.</p>
  <p>Para tu radar: está empezando a ganar tracción una técnica alternativa (muy usada en imágenes como DALL-E) llamada <strong>Difusión</strong>. Esta no escribe palabra por palabra, sino que genera un texto completo de "ruido" y lo va "refinando" en pasos hasta que tiene sentido. Pero por ahora, la autorregresión es la reina.</p>

  <h2>5. Quédate con esto (Tu Claridad Mental)</h2>

  <blockquote>
    <p><strong>Mejora:</strong> He añadido una conclusión explícita. El post anterior terminaba con los papers, lo cual era un poco abrupto. Esto cierra el círculo y refuerza el objetivo de "claridad mental".</p>
  </blockquote>

  <p>Si te quedas con una sola cosa, que sea esta:</p>
  <p>Toda la "inteligencia" que percibes en un LLM no es conciencia ni entendimiento. Es el resultado emergente de un sistema masivo entrenado para un juego muy simple: <strong>"Adivina la siguiente palabra"</strong>.</p>

</div>

<!-- Datos para los menús interactivos (oculto para el usuario) -->
<div id="interactive-data" style="display: none;">
  <div data-bib-id="stochastic-parrots">
    <strong>On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? 🦜</strong><br>
    <em>Bender, E. M., Gebru, T., et al. (2021)</em><br>
    <a href="https://dl.acm.org/doi/pdf/10.1145/3442188.3445922" target="_blank" rel="noopener noreferrer">Ver Paper (PDF)</a>
  </div>
</div>