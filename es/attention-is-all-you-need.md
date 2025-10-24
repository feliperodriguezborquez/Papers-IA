---
layout: default
lang: es
title: Attention Is All You Need
---
<div class="paper-detail">
  <div class="post-header">
    <a href="./#attention-is-all-you-need">&larr; Volver a la lista</a>
    {% if other_lang_page %}
      <a href="{{ other_lang_url | relative_url }}" class="language-switch-button">{{ other_lang_text }}</a>
    {% endif %}
  </div>

  <h1>{{ page.title }} (2017)</h1>

  <p class="paper-meta">
    <strong>Autores:</strong> Ashish Vaswani, et al.<br>
    <strong>Publicación:</strong> <a href="https://arxiv.org/pdf/1706.03762" target="_blank" rel="noopener noreferrer">arXiv:1706.03762</a>
  </p>

  <hr>

  <h2>Resumen Extendido</h2>
  <p>
    El paper "Attention Is All You Need" es uno de los trabajos más transformadores en el campo del Procesamiento del Lenguaje Natural (PLN). Su contribución principal fue la introducción de la arquitectura **Transformer**, que se desvió por completo de las arquitecturas recurrentes (RNN) y convolucionales (CNN) que dominaban el campo hasta ese momento.
  </p>
  <p>
    La idea central es que, para modelar dependencias en secuencias, no es necesario procesar los datos en orden. En su lugar, el modelo puede "prestar atención" a cualquier parte de la secuencia de entrada cuando genera una parte de la salida. Esto se logra a través del **mecanismo de atención**, específicamente "Scaled Dot-Product Attention" y "Multi-Head Attention".
  </p>

  <h2>Puntos Clave</h2>
  <ul>
    <li><strong>Eliminación de la Recurrencia:</strong> Al no depender del estado oculto del paso anterior, el Transformer puede procesar secuencias enteras en paralelo, lo que resulta en entrenamientos mucho más rápidos.</li>
    <li><strong>Multi-Head Attention:</strong> Permite al modelo enfocarse en diferentes partes de la secuencia y capturar distintos tipos de relaciones (sintácticas, semánticas, etc.) simultáneamente.</li>
    <li><strong>Positional Encodings:</strong> Como el modelo no tiene una noción inherente del orden de las palabras, se inyectan "codificaciones posicionales" a los embeddings de entrada para darles información sobre su posición en la secuencia.</li>
  </ul>

  <h2>Impacto en la IA</h2>
  <p>
    El impacto del Transformer ha sido monumental. Es la arquitectura fundamental detrás de casi todos los modelos de lenguaje a gran escala (LLMs) modernos, incluyendo la familia de modelos GPT (de OpenAI), BERT (de Google), y muchos otros. Su eficiencia y escalabilidad permitieron el entrenamiento de modelos con miles de millones de parámetros, dando lugar a la revolución de la IA generativa que vemos hoy.
  </p>

</div>
