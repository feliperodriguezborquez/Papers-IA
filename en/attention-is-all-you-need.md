---
layout: default
lang: en
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
    <strong>Authors:</strong> Ashish Vaswani, et al.<br>
    <strong>Publication:</strong> <a href="https://arxiv.org/pdf/1706.03762" target="_blank" rel="noopener noreferrer">arXiv:1706.03762</a>
  </p>

  <hr>

  <h2>Extended Summary</h2>
  <p>
    The paper "Attention Is All You Need" is one of the most transformative works in the field of Natural Language Processing (NLP). Its main contribution was the introduction of the **Transformer** architecture, which completely departed from the recurrent (RNN) and convolutional (CNN) architectures that had dominated the field until then.
  </p>
  <p>
    The core idea is that to model dependencies in sequences, it is not necessary to process the data in order. Instead, the model can "pay attention" to any part of the input sequence when generating a part of the output. This is achieved through the **attention mechanism**, specifically "Scaled Dot-Product Attention" and "Multi-Head Attention".
  </p>

  <h2>Key Points</h2>
  <ul>
    <li><strong>Elimination of Recurrence:</strong> By not depending on the hidden state of the previous step, the Transformer can process entire sequences in parallel, resulting in much faster training.</li>
    <li><strong>Multi-Head Attention:</strong> Allows the model to focus on different parts of the sequence and capture different types of relationships (syntactic, semantic, etc.) simultaneously.</li>
    <li><strong>Positional Encodings:</strong> Since the model has no inherent notion of word order, "positional encodings" are injected into the input embeddings to give them information about their position in the sequence.</li>
  </ul>

  <h2>Impact on AI</h2>
  <p>
    The impact of the Transformer has been monumental. It is the fundamental architecture behind almost all modern large-scale language models (LLMs), including the GPT family of models (from OpenAI), BERT (from Google), and many others. Its efficiency and scalability enabled the training of models with billions of parameters, leading to the generative AI revolution we see today.
  </p>

</div>