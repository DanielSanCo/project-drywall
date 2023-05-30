const categoria = [
    { name: 'Fitas e Massas de Drywall', categoria: 'Construção Seca', subCategoria: 'Drywall', link: '/produtos/Drywall/Fitas e Massas de Drywall', img: '/images/drywall.jpg' },
    { name: 'Placas de Drywall', categoria: 'Construção Seca', subCategoria: 'Drywall', link: '/produtos/Drywall/Placas de Drywall', img: '/images/drywall.jpg' },
    { name: 'Ferramentas de Drywall', categoria: 'Construção Seca', subCategoria: 'Drywall', link: '/produtos/Drywall/Ferramentas de Drywall', img: '/images/drywall.jpg' },
    { name: 'Alçapão', categoria: 'Construção Seca', subCategoria: 'Drywall', link: '/produtos/Drywall/Alçapão', img: '/images/drywall.jpg' },
    { name: 'Sisal', categoria: 'Construção Seca', subCategoria: 'Drywall', link: '/produtos/Drywall/Sisal', img: '/images/drywall.jpg' },
    { name: 'Fixação', categoria: 'Construção Seca', subCategoria: 'Drywall', link: '/produtos/Drywall/Fixação', img: '/images/drywall.jpg' },
    { name: 'Variados', categoria: 'Construção Seca', subCategoria: 'Drywall', link: '/produtos/Drywall/Variados', img: '/images/drywall.jpg' },
    
    { name: 'Placas Cimenticias', categoria: 'Construção Seca', subCategoria: 'Placas Cimenticias', link: '/produtos/Placas Cimenticias/Placas Cimenticias', img: '/images/drywall.jpg' },
    { name: 'Massas', categoria: 'Construção Seca', subCategoria: 'Placas Cimenticias', link: '/produtos/Placas Cimenticias/Massas', img: '/images/drywall.jpg' },
    { name: 'Fixação', categoria: 'Construção Seca', subCategoria: 'Placas Cimenticias', link: '/produtos/Placas Cimenticias/Fixação', img: '/images/drywall.jpg' },
    
    { name: 'Argamassas', categoria: 'Materiais de Construção', subCategoria: 'Cimentos, Argamassas e Concretos', link: '/produtos/Cimentos, Argamassas e Concretos/Argamassas', img: '/images/drywall.jpg' },
    { name: 'Argamassas AC1', categoria: 'Materiais de Construção', subCategoria: 'Cimentos, Argamassas e Concretos', link: '/produtos/Cimentos, Argamassas e Concretos/Argamassas AC1', img: '/images/drywall.jpg' },
    { name: 'Argamassas AC2', categoria: 'Materiais de Construção', subCategoria: 'Cimentos, Argamassas e Concretos', link: '/produtos/Cimentos, Argamassas e Concretos/Argamassas AC2', img: '/images/drywall.jpg' },
    { name: 'Argamassas AC3', categoria: 'Materiais de Construção', subCategoria: 'Cimentos, Argamassas e Concretos', link: '/produtos/Cimentos, Argamassas e Concretos/Argamassas AC3', img: '/images/drywall.jpg' },
    { name: 'Cimentos', categoria: 'Materiais de Construção', subCategoria: 'Cimentos, Argamassas e Concretos', link: '/produtos/Cimentos, Argamassas e Concretos/Cimentos', img: '/images/drywall.jpg' },
    { name: 'Ipermeabilizantes', categoria: 'Materiais de Construção', subCategoria: 'Cimentos, Argamassas e Concretos', link: '/produtos/Cimentos, Argamassas e Concretos/Ipermeabilizantes', img: '/images/drywall.jpg' },
    { name: 'Fitilhos', categoria: 'Materiais de Construção', subCategoria: 'Cimentos, Argamassas e Concretos', link: '/produtos/Cimentos, Argamassas e Concretos/Fitilhos', img: '/images/drywall.jpg' },
    { name: 'Gessos', categoria: 'Materiais de Construção', subCategoria: 'Cimentos, Argamassas e Concretos', link: '/produtos/Cimentos, Argamassas e Concretos/Gessos', img: '/images/drywall.jpg' },
    
    { name: 'Estribos', categoria: 'Materiais de Construção', subCategoria: 'Aços para Construção', link: '/produtos/Aços para Construção/Estribos', img: '/images/drywall.jpg' },
    { name: 'Vergalhões', categoria: 'Materiais de Construção', subCategoria: 'Aços para Construção', link: '/produtos/Aços para Construção/Vergalhões', img: '/images/drywall.jpg' },
    { name: 'Sapatas', categoria: 'Materiais de Construção', subCategoria: 'Aços para Construção', link: '/produtos/Aços para Construção/Sapatas', img: '/images/drywall.jpg' },
    { name: 'Telas de Aço', categoria: 'Materiais de Construção', subCategoria: 'Aços para Construção', link: '/produtos/Aços para Construção/Telas de Aço', img: '/images/drywall.jpg' },
    { name: 'Colunas Prontas', categoria: 'Materiais de Construção', subCategoria: 'Aços para Construção', link: '/produtos/Aços para Construção/Colunas Prontas', img: '/images/drywall.jpg' },

    { name: 'Adesivos Araldite', categoria: 'Materiais de Construção', subCategoria: 'Adesivos e Colas', link: '/produtos/Adesivos e Colas/Adesivos Araldite', img: '/images/drywall.jpg' },
    { name: 'Adesivos de Contato', categoria: 'Materiais de Construção', subCategoria: 'Adesivos e Colas', link: '/produtos/Adesivos e Colas/Adesivos de Contato', img: '/images/drywall.jpg' },
    { name: 'Cola Branca', categoria: 'Materiais de Construção', subCategoria: 'Adesivos e Colas', link: '/produtos/Adesivos e Colas/Cola Branca', img: '/images/drywall.jpg' },
    { name: 'Catalisador', categoria: 'Materiais de Construção', subCategoria: 'Adesivos e Colas', link: '/produtos/Adesivos e Colas/Catalisador', img: '/images/drywall.jpg' },
    
    { name: 'Areais e Britas', categoria: 'Materiais de Construção', subCategoria: 'Areais e Britas', link: '/produtos/Areais e Britas/Areais e Britas', img: '/images/drywall.jpg' },
    { name: 'Barro', categoria: 'Materiais de Construção', subCategoria: 'Areais e Britas', link: '/produtos/Areais e Britas/Barro', img: '/images/drywall.jpg' },
    { name: 'Saibro', categoria: 'Materiais de Construção', subCategoria: 'Areais e Britas', link: '/produtos/Areais e Britas/Saibro', img: '/images/drywall.jpg' },
    { name: 'Areia', categoria: 'Materiais de Construção', subCategoria: 'Areais e Britas', link: '/produtos/Areais e Britas/Areia', img: '/images/drywall.jpg' },
    { name: 'Brita', categoria: 'Materiais de Construção', subCategoria: 'Areais e Britas', link: '/produtos/Areais e Britas/Brita', img: '/images/drywall.jpg' },
    { name: 'Areola', categoria: 'Materiais de Construção', subCategoria: 'Areais e Britas', link: '/produtos/Areais e Britas/Areola', img: '/images/drywall.jpg' },
    
    { name: 'Baldes', categoria: 'Materiais de Construção', subCategoria: 'Baldes e Masseiras', link: '/produtos/Baldes e Masseiras/Baldes', img: '/images/drywall.jpg' },
    { name: 'Masseiras', categoria: 'Materiais de Construção', subCategoria: 'Baldes e Masseiras', link: '/produtos/Baldes e Masseiras/Masseiras', img: '/images/drywall.jpg' },
    
    { name: 'Fixadores', categoria: 'Materiais de Construção', subCategoria: 'Fixação', link: '/produtos/Fixação/Fixadores', img: '/images/drywall.jpg' },
    { name: 'Fios', categoria: 'Materiais de Construção', subCategoria: 'Fixação', link: '/produtos/Fixação/Fios', img: '/images/drywall.jpg' },
    
    { name: 'Fundos Preparadores', categoria: 'Tintas e Acessórios', subCategoria: 'Tintas', link: '/produtos/Tintas/Fundos Preparadores', img: '/images/drywall.jpg' },
    { name: 'Brilho para Tinta', categoria: 'Tintas e Acessórios', subCategoria: 'Tintas', link: '/produtos/Tintas/Brilho para Tinta', img: '/images/drywall.jpg' },
    { name: 'Tintas Epóxi', categoria: 'Tintas e Acessórios', subCategoria: 'Tintas', link: '/produtos/Tintas/Tintas Epóxi', img: '/images/drywall.jpg' },
    { name: 'Tintas Spray', categoria: 'Tintas e Acessórios', subCategoria: 'Tintas', link: '/produtos/Tintas/Tintas Spray', img: '/images/drywall.jpg' },
    { name: 'Tintas para Parede Interna', categoria: 'Tintas e Acessórios', subCategoria: 'Tintas', link: '/produtos/Tintas/Tintas para Parede Interna', img: '/images/drywall.jpg' },
    { name: 'Tintas Esmate a Base de Água', categoria: 'Tintas e Acessórios', subCategoria: 'Tintas', link: '/produtos/Tintas/Tintas Esmate a Base de Água', img: '/images/drywall.jpg' },

    { name: "Lixa D'água", categoria: 'Tintas e Acessórios', subCategoria: 'Abrasivos', link: "/produtos/Abrasivos/Lixa D'água", img: '/images/drywall.jpg' },
    { name: "Lixas de Ferro", categoria: 'Tintas e Acessórios', subCategoria: 'Abrasivos', link: "/produtos/Abrasivos/Lixas de Ferro", img: '/images/drywall.jpg' },
    { name: "Discos de Lixa", categoria: 'Tintas e Acessórios', subCategoria: 'Abrasivos', link: "/produtos/Abrasivos/Discos de Lixa", img: '/images/drywall.jpg' },
    { name: "Lixas de Massa", categoria: 'Tintas e Acessórios', subCategoria: 'Abrasivos', link: "/produtos/Abrasivos/Lixas de Massa", img: '/images/drywall.jpg' },
    { name: "Suportes para Lixas", categoria: 'Tintas e Acessórios', subCategoria: 'Abrasivos', link: "/produtos/Abrasivos/Suportes para Lixas", img: '/images/drywall.jpg' },
    
    { name: "Diluentes", categoria: 'Tintas e Acessórios', subCategoria: 'Solventes e Removedores', link: "/produtos/Solventes e Removedores/Diluentes", img: '/images/drywall.jpg' },
    { name: "Removedores", categoria: 'Tintas e Acessórios', subCategoria: 'Solventes e Removedores', link: "/produtos/Solventes e Removedores/Removedores", img: '/images/drywall.jpg' },
    
    { name: "Corantes em Pó", categoria: 'Tintas e Acessórios', subCategoria: 'Corantes', link: "/produtos/Corantes/Corantes em Pó", img: '/images/drywall.jpg' },
    { name: "Corantes Líquidos", categoria: 'Tintas e Acessórios', subCategoria: 'Corantes', link: "/produtos/Corantes/Corantes Líquidos", img: '/images/drywall.jpg' },
    { name: "Betume", categoria: 'Tintas e Acessórios', subCategoria: 'Corantes', link: "/produtos/Corantes/Betume", img: '/images/drywall.jpg' },
    
    { name: "Desempenadeiras", categoria: 'Tintas e Acessórios', subCategoria: 'Ferramentas para Pintura', link: "/produtos/Ferramentas para Pintura/Desempenadeiras", img: '/images/drywall.jpg' },
    { name: "Bandeja de Pintura", categoria: 'Tintas e Acessórios', subCategoria: 'Ferramentas para Pintura', link: "/produtos/Ferramentas para Pintura/Bandeja de Pintura", img: '/images/drywall.jpg' },
    { name: "Espátulas", categoria: 'Tintas e Acessórios', subCategoria: 'Ferramentas para Pintura', link: "/produtos/Ferramentas para Pintura/Espátulas", img: '/images/drywall.jpg' },
    { name: "Cabos Extensíveis", categoria: 'Tintas e Acessórios', subCategoria: 'Ferramentas para Pintura', link: "/produtos/Ferramentas para Pintura/Cabos Extensíveis", img: '/images/drywall.jpg' },
    { name: "Baldes", categoria: 'Tintas e Acessórios', subCategoria: 'Ferramentas para Pintura', link: "/produtos/Ferramentas para Pintura/Baldes", img: '/images/drywall.jpg' },
    { name: "Broxas", categoria: 'Tintas e Acessórios', subCategoria: 'Ferramentas para Pintura', link: "/produtos/Ferramentas para Pintura/Broxas", img: '/images/drywall.jpg' },
    
    { name: "Alcool", categoria: 'Tintas e Acessórios', subCategoria: 'Limpeza', link: "/produtos/Limpeza/Alcool", img: '/images/drywall.jpg' },
    
    { name: "Discos de Debaste", categoria: 'Ferramentas', subCategoria: 'Abrasivos', link: "/produtos/Abrasivos/Discos de Debaste", img: '/images/drywall.jpg' },
    { name: "Escovas de Aço", categoria: 'Ferramentas', subCategoria: 'Abrasivos', link: "/produtos/Abrasivos/Escovas de Aço", img: '/images/drywall.jpg' },
    { name: "Pedra de Afiar", categoria: 'Ferramentas', subCategoria: 'Abrasivos', link: "/produtos/Abrasivos/Pedra de Afiar", img: '/images/drywall.jpg' },
    { name: "Limas e Grosas", categoria: 'Ferramentas', subCategoria: 'Abrasivos', link: "/produtos/Abrasivos/Limas e Grosas", img: '/images/drywall.jpg' },
    { name: "Jogo de Escovas", categoria: 'Ferramentas', subCategoria: 'Abrasivos', link: "/produtos/Abrasivos/Jogo de Escovas", img: '/images/drywall.jpg' },
    { name: "Rebolos", categoria: 'Ferramentas', subCategoria: 'Abrasivos', link: "/produtos/Abrasivos/Rebolos", img: '/images/drywall.jpg' },
    { name: "Afiador de Facas", categoria: 'Ferramentas', subCategoria: 'Abrasivos', link: "/produtos/Abrasivos/Afiador de Facas", img: '/images/drywall.jpg' },
    
    { name: "Caixas Metálicas para Ferramentas", categoria: 'Ferramentas', subCategoria: 'Caixas e Organizações', link: "/produtos/Caixas e Organizações/Caixas Metálicas para Ferramentas", img: '/images/drywall.jpg' },
    { name: "Bolsas para Ferramentas", categoria: 'Ferramentas', subCategoria: 'Caixas e Organizações', link: "/produtos/Caixas e Organizações/Bolsas para Ferramentas", img: '/images/drywall.jpg' },
    { name: "Caixas Plásticas para Ferramentas", categoria: 'Ferramentas', subCategoria: 'Caixas e Organizações', link: "/produtos/Caixas e Organizações/Caixas Plásticas para Ferramentas", img: '/images/drywall.jpg' },
    { name: "Cinturões para Ferramentas", categoria: 'Ferramentas', subCategoria: 'Caixas e Organizações', link: "/produtos/Caixas e Organizações/Cinturões para Ferramentas", img: '/images/drywall.jpg' },
    { name: "Mochilas para Ferramentas", categoria: 'Ferramentas', subCategoria: 'Caixas e Organizações', link: "/produtos/Caixas e Organizações/Mochilas para Ferramentas", img: '/images/drywall.jpg' },
    
    { name: "Cabos de Polietileno", categoria: 'Ferramentas', subCategoria: 'Cabos de Ferramentas', link: "/produtos/Cabos de Ferramentas/Cabos de Polietileno", img: '/images/drywall.jpg' },
    { name: "Cabos de Madeira", categoria: 'Ferramentas', subCategoria: 'Cabos de Ferramentas', link: "/produtos/Cabos de Ferramentas/Cabos de Madeira", img: '/images/drywall.jpg' },
    
    { name: "Alicates", categoria: 'Ferramentas', subCategoria: 'Ferramentas Manuais', link: "/produtos/Ferramentas Manuais/Alicates", img: '/images/drywall.jpg' },
    
    { name: "Brocas de Vídea", categoria: 'Ferramentas', subCategoria: 'Brocas, Serras Copo e Bits', link: "/produtos/Brocas, Serras Copo e Bits/Brocas de Vídea", img: '/images/drywall.jpg' },
    { name: "Bits", categoria: 'Ferramentas', subCategoria: 'Brocas, Serras Copo e Bits', link: "/produtos/Brocas, Serras Copo e Bits/Bits", img: '/images/drywall.jpg' },
    { name: "Brocas de Aço", categoria: 'Ferramentas', subCategoria: 'Brocas, Serras Copo e Bits', link: "/produtos/Brocas, Serras Copo e Bits/Brocas de Aço", img: '/images/drywall.jpg' },
    { name: "Brocas Chata", categoria: 'Ferramentas', subCategoria: 'Brocas, Serras Copo e Bits', link: "/produtos/Brocas, Serras Copo e Bits/Brocas Chata", img: '/images/drywall.jpg' },
    { name: "Brocas de Encaixe", categoria: 'Ferramentas', subCategoria: 'Brocas, Serras Copo e Bits', link: "/produtos/Brocas, Serras Copo e Bits/Brocas de Encaixe", img: '/images/drywall.jpg' },
    { name: "Brocas Mourão", categoria: 'Ferramentas', subCategoria: 'Brocas, Serras Copo e Bits', link: "/produtos/Brocas, Serras Copo e Bits/Brocas Mourão", img: '/images/drywall.jpg' },
    
    { name: "Chave de Mandril", categoria: 'Ferramentas', subCategoria: 'Acessórios de Ferramentas', link: "/produtos/Acessórios de Ferramentas/Chave de Mandril", img: '/images/drywall.jpg' },
    { name: "Adaptadores para Furadeira", categoria: 'Ferramentas', subCategoria: 'Acessórios de Ferramentas', link: "/produtos/Acessórios de Ferramentas/Adaptadores para Furadeira", img: '/images/drywall.jpg' },
    { name: "Flanges de Esmerilhadeira", categoria: 'Ferramentas', subCategoria: 'Acessórios de Ferramentas', link: "/produtos/Acessórios de Ferramentas/Flanges de Esmerilhadeira", img: '/images/drywall.jpg' },
    { name: "Chave de Makita", categoria: 'Ferramentas', subCategoria: 'Acessórios de Ferramentas', link: "/produtos/Acessórios de Ferramentas/Chave de Makita", img: '/images/drywall.jpg' },
    { name: "Carvão", categoria: 'Ferramentas', subCategoria: 'Acessórios de Ferramentas', link: "/produtos/Acessórios de Ferramentas/Carvão", img: '/images/drywall.jpg' },
    { name: "Mandril", categoria: 'Ferramentas', subCategoria: 'Acessórios de Ferramentas', link: "/produtos/Acessórios de Ferramentas/Mandril", img: '/images/drywall.jpg' },

    { name: "Abafador", categoria: 'Ferramentas', subCategoria: 'Protetores', link: "/produtos/Protetores/Abafador", img: '/images/drywall.jpg' },
    
    { name: "Engates Flexíveis", categoria: 'Hidraulica', subCategoria: 'Acessórios Hidráulicos', link: "/produtos/Acessórios Hidráulicos/Engates Flexíveis", img: '/images/drywall.jpg' },
    { name: "Restritores de Vazão", categoria: 'Hidraulica', subCategoria: 'Acessórios Hidráulicos', link: "/produtos/Acessórios Hidráulicos/Restritores de Vazão", img: '/images/drywall.jpg' },
    { name: "Louças", categoria: 'Hidraulica', subCategoria: 'Acessórios Hidráulicos', link: "/produtos/Acessórios Hidráulicos/Louças", img: '/images/drywall.jpg' },
    
    { name: "Acabamentos de Registros", categoria: 'Hidraulica', subCategoria: 'Acabamentos', link: "/produtos/Acabamentos/Acabamentos de Registros", img: '/images/drywall.jpg' },
    { name: "Acabamentos de Válvula", categoria: 'Hidraulica', subCategoria: 'Acabamentos', link: "/produtos/Acabamentos/Acabamentos de Válvula", img: '/images/drywall.jpg' },
    
    { name: "Adesivos PVC", categoria: 'Hidraulica', subCategoria: 'Adesivos e Colas', link: "/produtos/Adesivos e Colas/Adesivos PVC", img: '/images/drywall.jpg' },
    { name: "Massa Zarcão", categoria: 'Hidraulica', subCategoria: 'Adesivos e Colas', link: "/produtos/Adesivos e Colas/Massa Zarcão", img: '/images/drywall.jpg' },
    { name: "Adesivos Plásticos", categoria: 'Hidraulica', subCategoria: 'Adesivos e Colas', link: "/produtos/Adesivos e Colas/Adesivos Plásticos", img: '/images/drywall.jpg' },
    { name: "Solução Limpadora", categoria: 'Hidraulica', subCategoria: 'Adesivos e Colas', link: "/produtos/Adesivos e Colas/Solução Limpadora", img: '/images/drywall.jpg' },
    { name: "Adesivos Veda Juntas", categoria: 'Hidraulica', subCategoria: 'Adesivos e Colas', link: "/produtos/Adesivos e Colas/Adesivos Veda Juntas", img: '/images/drywall.jpg' },
    { name: "Adesivos Plásticos", categoria: 'Hidraulica', subCategoria: 'Adesivos e Colas', link: "/produtos/Adesivos e Colas/Adesivos Plásticos", img: '/images/drywall.jpg' },
    
    { name: "Ralos e Grelhas", categoria: 'Hidraulica', subCategoria: 'Ralos e Grelhas', link: "/produtos/Ralos e Grelhas/Ralos e Grelhas", img: '/images/drywall.jpg' },
    { name: "Terminais PP", categoria: 'Hidraulica', subCategoria: 'Ralos e Grelhas', link: "/produtos/Ralos e Grelhas/Terminais PP", img: '/images/drywall.jpg' },
    { name: "Caixa Sifonada", categoria: 'Hidraulica', subCategoria: 'Ralos e Grelhas', link: "/produtos/Ralos e Grelhas/Caixa Sifonada", img: '/images/drywall.jpg' },
    { name: "Ralo Linear", categoria: 'Hidraulica', subCategoria: 'Ralos e Grelhas', link: "/produtos/Ralos e Grelhas/Ralo Linear", img: '/images/drywall.jpg' },
    
    { name: "Bombas D'água Auto Aspirante", categoria: 'Hidraulica', subCategoria: "Bombas D'água", link: "/produtos/Bombas D'água/Bombas D'água Auto Aspirante", img: '/images/drywall.jpg' },
    { name: "Bombas D'água Periférica", categoria: 'Hidraulica', subCategoria: "Bombas D'água", link: "/produtos/Bombas D'água/Bombas D'água Periférica", img: '/images/drywall.jpg' },
    { name: "Bombas D'água Submersa", categoria: 'Hidraulica', subCategoria: "Bombas D'água", link: "/produtos/Bombas D'água/Bombas D'água Submersa", img: '/images/drywall.jpg' },
    
    { name: "Tubos", categoria: 'Hidraulica', subCategoria: "Tubos e Conexões", link: "/produtos/Tubos e Conexões/Tubos", img: '/images/drywall.jpg' },
    { name: "Conexões", categoria: 'Hidraulica', subCategoria: "Tubos e Conexões", link: "/produtos/Tubos e Conexões/Conexões", img: '/images/drywall.jpg' },
    { name: "Aneis", categoria: 'Hidraulica', subCategoria: "Tubos e Conexões", link: "/produtos/Tubos e Conexões/Aneis", img: '/images/drywall.jpg' },
    { name: "Buchas", categoria: 'Hidraulica', subCategoria: "Tubos e Conexões", link: "/produtos/Tubos e Conexões/Buchas", img: '/images/drywall.jpg' },
    { name: "Adaptadores", categoria: 'Hidraulica', subCategoria: "Tubos e Conexões", link: "/produtos/Tubos e Conexões/Adaptadores", img: '/images/drywall.jpg' },
    { name: "Joelhos", categoria: 'Hidraulica', subCategoria: "Tubos e Conexões", link: "/produtos/Tubos e Conexões/Joelhos", img: '/images/drywall.jpg' },
    { name: "Luvas", categoria: 'Hidraulica', subCategoria: "Tubos e Conexões", link: "/produtos/Tubos e Conexões/Luvas", img: '/images/drywall.jpg' },
    { name: "Válvulas", categoria: 'Hidraulica', subCategoria: "Tubos e Conexões", link: "/produtos/Tubos e Conexões/Válvulas", img: '/images/drywall.jpg' },
    
    { name: "Barramento", categoria: 'Elétrica', subCategoria: "Disjuntores e Suportes", link: "/produtos/Disjuntores e Suportes/Barramento", img: '/images/drywall.jpg' },
    { name: "Suportes para Ventilador", categoria: 'Elétrica', subCategoria: "Disjuntores e Suportes", link: "/produtos/Disjuntores e Suportes/Suportes para Ventilador", img: '/images/drywall.jpg' },
    { name: "Disjuntores", categoria: 'Elétrica', subCategoria: "Disjuntores e Suportes", link: "/produtos/Disjuntores e Suportes/Disjuntores", img: '/images/drywall.jpg' },
    
    { name: "Antenas", categoria: 'Elétrica', subCategoria: "Acessórios para Televisão", link: "/produtos/Acessórios para Televisão/Antenas", img: '/images/drywall.jpg' },
    { name: "Cabos RCA", categoria: 'Elétrica', subCategoria: "Acessórios para Televisão", link: "/produtos/Acessórios para Televisão/Cabos RCA", img: '/images/drywall.jpg' },
    { name: "Conectores para Antena", categoria: 'Elétrica', subCategoria: "Acessórios para Televisão", link: "/produtos/Acessórios para Televisão/Conectores para Antena", img: '/images/drywall.jpg' },
    { name: "Cabo Coaxial", categoria: 'Elétrica', subCategoria: "Acessórios para Televisão", link: "/produtos/Acessórios para Televisão/Cabo Coaxial", img: '/images/drywall.jpg' },
    { name: "Cabos HDMI", categoria: 'Elétrica', subCategoria: "Acessórios para Televisão", link: "/produtos/Acessórios para Televisão/Cabos HDMI", img: '/images/drywall.jpg' },
    { name: "Receptores", categoria: 'Elétrica', subCategoria: "Acessórios para Televisão", link: "/produtos/Acessórios para Televisão/Receptores", img: '/images/drywall.jpg' },
    
    { name: "Quadros de Distribuição", categoria: 'Elétrica', subCategoria: "Ar Condicionado", link: "/produtos/Ar Condicionado/Quadros de Distribuição", img: '/images/drywall.jpg' },
    { name: "Caixa Proteção para Ar Condicionado", categoria: 'Elétrica', subCategoria: "Ar Condicionado", link: "/produtos/Ar Condicionado/Caixa Proteção para Ar Condicionado", img: '/images/drywall.jpg' },
]

export default categoria;