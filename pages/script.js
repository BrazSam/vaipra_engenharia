
        function trocarImagem(thumb, src) {
            document.getElementById('imgPrincipal').src = src;
            document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        }

        function selecionarVariante(btn, labelId) {
            const grupo = btn.closest('.variante-btns');
            grupo.querySelectorAll('.var-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(labelId).textContent = btn.textContent;
        }

        function selecionarSabor(btn, nome) {
            document.querySelectorAll('.sabor-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById('saborSelecionado').textContent = nome;
        }

        function adicionarSacola() {
            const btn = document.querySelector('.btn-adicionar-sacola');
            btn.textContent = '✅ Adicionado à sacola!';
            btn.style.background = '#dcfce7';
            btn.style.color = '#16a34a';
            btn.style.borderColor = '#16a34a';
            setTimeout(() => {
                btn.textContent = '🛒 Adicionar à sacola';
                btn.style.background = '';
                btn.style.color = '';
                btn.style.borderColor = '';
            }, 2000);
        }