---
layout: default
lang: es
---
# 📚 Papers Fundamentales de la IA Moderna

Una colección curada de los papers más influyentes que han definido el panorama de la Inteligencia Artificial moderna. Ideal para tener una referencia rápida de los pilares teóricos del Deep Learning.

---

<div class="papers-list">

  <section class="paper-category">
    <h2>🤖 Arquitecturas Transformer y Modelos de Lenguaje (LLMs)</h2>

    <div class="paper-item" id="attention-is-all-you-need" data-category="LLMs, Transformers">
      <h3><a href="papers/attention-is-all-you-need.html">Attention Is All You Need</a></h3>
      <p class="paper-meta">
        <strong>Autores:</strong> Ashish Vaswani, et al.<br>
        <strong>Año:</strong> 2017<br>
        <strong>Publicación:</strong> <a href="https://arxiv.org/pdf/1706.03762">arXiv:1706.03762</a>
      </p>
      <p class="paper-summary">Introdujo la arquitectura **Transformer** (encoder-decoder), ocupando como única base el mecanismo de atención, prescindiendo así de las antiguas RNNs. Además, realizó toda la ingeniería necesaria para que el modelo sea funcional. Sentó las bases para los modernos LLMs.</p>
    </div>

    <div class="paper-item" id="gpt3" data-category="LLMs, Few-Shot Learning">
      <h3>Language Models are Few-Shot Learners (GPT-3)</h3>
      <p class="paper-meta">
        <strong>Autores:</strong> Tom B. Brown, et al.<br>
        <strong>Año:</strong> 2020<br>
        <strong>Publicación:</strong> <a href="https://arxiv.org/pdf/2005.14165">arXiv:2005.14165</a>
      </p>
      <p class="paper-summary">Llevó los LLMs a una escala sin precedentes (175 mil millones de parámetros). Introdujo el concepto de "in-context learning" o aprendizaje *few-shot*, donde el modelo puede aprender a realizar una tarea con solo ver unos pocos ejemplos en el prompt.</p>
    </div>

    <div class="paper-item" id="next-token-prediction" data-category="LLMs, Conceptos Fundamentales">
      <h3><a href="next-token-prediction.html">Predicción del Siguiente Token</a></h3>
      <p class="paper-meta">
        <strong>Tipo:</strong> Artículo Explicativo<br>
        <strong>Concepto Clave:</strong> Generación Autorregresiva
      </p>
      <p class="paper-summary">Explica de forma sencilla el motor de todos los LLMs modernos: el bucle de predecir la siguiente palabra (o token), añadirla al texto, y repetir. La base de la IA generativa actual.</p>
    </div>

  </section>

</div>
