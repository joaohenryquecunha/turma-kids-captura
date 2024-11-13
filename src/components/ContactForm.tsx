import React, { useEffect } from 'react';
import axios from 'axios';
import { Send } from 'lucide-react';

export default function ContactForm() {
  useEffect(() => {
    const formatPhoneNumber = (value: string) => {
      let isInternational = false;
      if (value.startsWith('+')) {
        isInternational = true;
        value = '+' + value.slice(1).replace(/\D/g, '');
      } else {
        value = value.replace(/\D/g, '');
      }
      
      if (value.length === 0) return '';
      if (isInternational || value.length > 11) {
        return isInternational ? `${value.slice(0, 20)}` : value.slice(0, 20);
      }
      
      if (value.length <= 2) return `${value}`;
      if (value.length <= 6) return `(${value.slice(0, 2)}) ${value.slice(2)}`;
      if (value.length <= 10) return `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
      if (value.length <= 11) return `(${value.slice(0, 2)}) ${value.slice(2, 3)} ${value.slice(3, 7)}-${value.slice(7)}`;
      return value;
    };

    const phoneInput = document.querySelector('input[name="phone-preview"]');
    if (phoneInput) {
      phoneInput.addEventListener('input', (e) => {
        const input = e.target as HTMLInputElement;
        input.value = formatPhoneNumber(input.value);
      });
    }
  }, []);

  const handleSubmit = async () => {
    const formData = new FormData();
    const infoLog = document.querySelector('[data-log="infoLog"]') as HTMLElement;
    
    formData.append("tenant_id", "1538");
    formData.append("form_id", "9");

    const inputs = document.querySelectorAll('form input');
    let isValid = true;

    inputs.forEach((input: Element) => {
      const element = input as HTMLInputElement;
      if (element.type !== "hidden") {
        const name = element.name.replace("-preview", "");
        formData.append(name, element.value);

        if (element.value === "") {
          isValid = false;
        }

        if (element.name.includes('email')) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(element.value)) {
            isValid = false;
            if (infoLog) {
              infoLog.style.color = "red";
              infoLog.style.display = "block";
              infoLog.innerText = "Por favor, insira um e-mail válido";
            }
          }
        }
      }
    });

    if (!isValid) {
      if (infoLog) {
        infoLog.style.color = "red";
        infoLog.style.display = "block";
        infoLog.innerText = "Por favor, preencha todos os campos corretamente";
      }
      return;
    }

    try {
      const response = await axios.post("https://back.gdigital.com.br/form/register", formData);
      if (infoLog) {
        infoLog.style.color = "green";
        infoLog.style.display = "block";
        infoLog.innerText = "Lead cadastrado com sucesso";
      }
    } catch (error) {
      if (infoLog) {
        infoLog.style.color = "red";
        infoLog.style.display = "block";
        infoLog.innerText = "Erro ao cadastrar. Por favor, tente novamente.";
      }
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Cadastre-se para Receber
          </h2>
          <p className="text-xl text-gray-400">
            Preencha seus dados e receba sua história demonstrativa gratuitamente
          </p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
            <form className="space-y-6">
              <div className="form-group">
                <label className="block text-sm font-medium text-white mb-2">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition duration-200"
                  name="nome-preview"
                  id="nome-preview"
                />
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium text-white mb-2">E-mail</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition duration-200"
                  name="email-preview"
                  placeholder="Deixe seu e-mail"
                  id="email-preview"
                />
              </div>

              <div className="form-group">
                <label className="block text-sm font-medium text-white mb-2">Telefone</label>
                <input
                  type="text"
                  placeholder="Deixe seu telefone"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition duration-200"
                  name="phone-preview"
                  id="phone-preview"
                />
              </div>

              <input type="hidden" id="tenant_id" value="1538" />
              <input type="hidden" id="form_id" value="9" />
              
              <p data-log="infoLog" className="text-sm mt-2 text-center" style={{ display: 'none' }}></p>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-6 rounded-lg transition duration-300 ease-in-out flex items-center justify-center space-x-2 group"
              >
                <span>Receber História Grátis</span>
                <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}