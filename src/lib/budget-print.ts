interface ClientInfo {
    name: string;
    email: string;
    company: string;
    description: string;
}

interface PageType {
    id: string;
    name: string;
    description: string;
    basePrice: number;
    estimatedDays: number;
    features: Array<{
        name: string;
        description: string;
        details: string[];
    }>;
}

interface AdditionalFeature {
    id: string;
    name: string;
    price: number;
    description: string;
    benefits: string[];
}

interface BudgetPrintData {
    selectedPage: PageType;
    selectedFeatures: AdditionalFeature[];
    timeline: string;
    clientInfo: ClientInfo;
    estimatedDays: number;
    deliveryDate: string;
    totalPrice: number;
}

export const generatePrintableHTML = (data: BudgetPrintData): string => {
    const {
        selectedPage,
        selectedFeatures,
        timeline,
        clientInfo,
        estimatedDays,
        deliveryDate,
        totalPrice,
    } = data;

    const basePrice = selectedPage.basePrice;
    const featuresPrice = selectedFeatures.reduce(
        (total, feature) => total + feature.price,
        0
    );
    const urgencyCharge =
        timeline === "urgent"
            ? Math.round((basePrice + featuresPrice) * 0.3)
            : 0;
    const discountCharge =
        timeline === "extended"
            ? Math.round((basePrice + featuresPrice) * 0.1)
            : 0;

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Presupuesto Web - ${clientInfo.name || "Cliente"}</title>
    <style>
        @font-face {
            font-family: "Cocogoose";
            src: url("/fonts/Cocogoose-Light.woff2") format("woff2");
            font-weight: 300;
            font-style: normal;
            font-display: swap;
        }
        @font-face {
            font-family: "Cocogoose";
            src: url("/fonts/Cocogoose-Semilight.woff2") format("woff2");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
        }
        @font-face {
            font-family: "Cocogoose";
            src: url("/fonts/Cocogoose-Regular.woff2") format("woff2");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
        }
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            background: white;
            padding: 20px;
        }
        .header {
            text-align: center;
            border-bottom: 3px solid #059669;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .header .logo {
            display: inline-flex;
            align-items: baseline;
            margin-bottom: 20px;
        }
        .header .logo svg {
            width: 28px;
            height: 28px;
            fill: #4c5dab;
            position: relative;
            bottom: -3px;
        }
        .header .logo span {
            margin-left: 2px;
            font-size: 2rem;
            font-family: "Cocogoose", sans-serif;
            font-weight: 400;
            color: black;
        }
        .header h1 {
            color: #4c5dab;
            font-size: 2.5em;
            font-family: "Cocogoose", sans-serif;
            font-weight: 500;
            margin-bottom: 10px;
        }
        .header p {
            color: #666;
            font-size: 1.1em;
        }
        .client-info {
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            border: 1px solid #e2e8f0;
        }
        .client-info h2 {
            color: #1e293b;
            margin-bottom: 15px;
            font-size: 1.5em;
            font-family: "Cocogoose", sans-serif;
            font-weight: 400;
        }
        .client-info .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
        }
        .info-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .info-item strong {
            color: #4c5dab;
            min-width: 80px;
        }
        .project-details {
            margin-bottom: 30px;
        }
        .project-details h2 {
            color: #4c5dab;
            margin-bottom: 20px;
            font-size: 1.8em;
            font-family: "Cocogoose", sans-serif;
            font-weight: 400;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 10px;
        }
        .page-type {
            background: #ecfdf5;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            border: 1px solid #e2e8f0;
        }
        .page-type h3 {
            color: #4c5dab;
            font-size: 1.4em;
            font-family: "Cocogoose", sans-serif;
            font-weight: 400;
            margin-bottom: 10px;
        }
        .page-type p {
            color: gray;
            margin-bottom: 15px;
        }
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 10px;
            margin-top: 15px;
        }
        .feature-badge {
            background: white;
            border: 1px solid #4c5dab;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 0.9em;
            color: #4c5dab;
            font-weight: 500;
        }
        .additional-features {
            margin-bottom: 30px;
        }
        .additional-features h3 {
            color: #4c5dab;
            margin-bottom: 15px;
            font-size: 1.4em;
            font-family: "Cocogoose", sans-serif;
            font-weight: 400;
        }
        .feature-item {
            background: #fafafa;
            padding: 15px;
            border-radius: 6px;
            margin-bottom: 10px;
            border: 1px solid #e5e7eb;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .feature-item .name {
            font-weight: 600;
            color: #374151;
        }
        .feature-item .price {
            color: #059669;
            font-weight: bold;
        }
        .budget-summary {
            background: #f0fdf4;
            border: 2px solid #059669;
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 30px;
        }
        .budget-summary h2 {
            color: #065f46;
            margin-bottom: 20px;
            font-size: 1.8em;
            font-family: "Cocogoose", sans-serif;
            font-weight: 400;
            text-align: center;
        }
        .budget-line {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid #d1fae5;
        }
        .budget-line:last-child {
            border-bottom: none;
        }
        .budget-line.total {
            background: #dcfce7;
            margin: 15px -25px -25px -25px;
            padding: 20px 25px;
            border-radius: 0 0 10px 10px;
            font-size: 1.3em;
            font-weight: bold;
            color: #4c5dab;
        }
        .budget-line .label {
            color: #374151;
            font-weight: 500;
        }
        .budget-line .amount {
            color: #059669;
            font-weight: 600;
        }
        .timeline-info {
            background: #eff6ff;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            border: 1px solid #bfdbfe;
        }
        .timeline-info h3 {
            color: #1e40af;
            margin-bottom: 10px;
            font-family: "Cocogoose", sans-serif;
            font-weight: 400;
        }
        .delivery-date {
            font-size: 1.2em;
            font-weight: bold;
            color: #1e40af;
        }
        .terms {
            background: #fefce8;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #fcd34d;
            page-break-inside: avoid;
        }
        .terms h3 {
            color: #92400e;
            margin-bottom: 15px;
            font-family: "Cocogoose", sans-serif;
            font-weight: 400;
        }
        .terms ul {
            list-style: none;
            padding: 0;
        }
        .terms li {
            margin-bottom: 8px;
            padding-left: 20px;
            position: relative;
        }
        .terms li::before {
            content: "✓";
            color: #92400e;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            color: #666;
        }
        .date-generated {
            text-align: right;
            color: #666;
            font-size: 0.9em;
            margin-bottom: 20px;
        }
        @media print {
            body { padding: 0; }
            .header { break-after: avoid; }
            .budget-summary { 
                break-inside: avoid; 
                break-before: page;
            }
            .additional-features {
                break-before: page;
            }
            .terms { break-inside: avoid; }
        }
    </style>
</head>
<body>
    <div class="date-generated">
        Presupuesto generado el: ${new Date().toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })}
    </div>

    <div class="header">
        <div class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 468 432">
                <path d="m181 310 44-1c1 0 3 0 5-2l83-86c3-3 3-7 0-10l-83-86-4-2h-47c-7 2-8 10-4 15l77 78-77 77c-4 7-2 15 6 17z" />
                <path d="M438 107A229 229 0 0 0 243 0H12C5 0 0 6 0 13v55c0 7 5 12 12 12h13c7 0 13 6 13 12v15c0 2 1 3 3 3h66c2 0 4-1 4-3V92c0-6 5-12 12-12h123a140 140 0 0 1 120 66c12 21 18 44 18 70s-6 49-18 70-29 37-50 48c-20 12-44 18-70 18l-123-1c-7 0-12-5-12-12V126c0-1-2-3-4-3H41c-2 0-3 1-3 3v213c0 6-6 12-13 12H12c-7 0-12 5-12 12v56c0 7 5 13 12 13h232a229 229 0 0 0 194-106c20-33 30-70 30-110s-10-77-30-109zM85 346c0 2-2 4-4 4H68c-2 0-3-2-3-4V176c0-2 1-3 3-3h13c2 0 4 1 4 3v170z" />
            </svg>
            <span>evanthos</span>
        </div>
        <h1>PRESUPUESTO WEB</h1>
        <p>Propuesta personalizada para su proyecto digital</p>
    </div>

    <div class="client-info">
        <h2>Información del Cliente</h2>
        <div class="info-grid">
            <div class="info-item">
                <strong>Nombre:</strong> ${clientInfo.name || "No especificado"}
            </div>
            <div class="info-item">
                <strong>Email:</strong> ${clientInfo.email || "No especificado"}
            </div>
            ${
                clientInfo.company
                    ? `
            <div class="info-item">
                <strong>Empresa:</strong> ${clientInfo.company}
            </div>
            `
                    : ""
            }
        </div>
        ${
            clientInfo.description
                ? `
        <div style="margin-top: 15px;">
            <strong>Descripción del proyecto:</strong>
            <p style="margin-top: 5px; color: #374151; font-style: italic;">${clientInfo.description}</p>
        </div>
        `
                : ""
        }
    </div>

    <div class="project-details">
        <h2>Detalles del Proyecto</h2>
        
        <div class="page-type">
            <h3>${selectedPage.name}</h3>
            <p>${selectedPage.description}</p>
            
            <div class="features-grid">
                ${selectedPage.features
                    .map(
                        (feature) => `
                    <div class="feature-badge">${feature.name}</div>
                `
                    )
                    .join("")}
            </div>
        </div>

        ${
            selectedFeatures.length > 0
                ? `
        <div class="additional-features">
            <h3>Características Adicionales Seleccionadas</h3>
            ${selectedFeatures
                .map(
                    (feature) => `
                <div class="feature-item">
                    <div>
                        <div class="name">${feature.name}</div>
                        <div style="font-size: 0.9em; color: #666; margin-top: 5px;">${feature.description}</div>
                    </div>
                    <div class="price">+$${feature.price} USD</div>
                </div>
            `
                )
                .join("")}
        </div>
        `
                : ""
        }
    </div>

    ${
        timeline
            ? `
    <div class="timeline-info">
        <h3>Información de Entrega</h3>
        <p><strong>Modalidad:</strong> ${
            timeline === "urgent"
                ? "Urgente"
                : timeline === "normal"
                ? "Normal"
                : "Flexible"
        }</p>
        <p><strong>Tiempo estimado:</strong> ${estimatedDays} días hábiles</p>
        <p class="delivery-date">Fecha estimada de entrega: ${deliveryDate}</p>
    </div>
    `
            : ""
    }

    <div class="budget-summary">
        <h2>Resumen del Presupuesto</h2>
        
        <div class="budget-line">
            <span class="label">${selectedPage.name}</span>
            <span class="amount">$${selectedPage.basePrice} USD</span>
        </div>
        
        ${selectedFeatures
            .map(
                (feature) => `
            <div class="budget-line">
                <span class="label">${feature.name}</span>
                <span class="amount">+$${feature.price} USD</span>
            </div>
        `
            )
            .join("")}
        
        ${
            urgencyCharge > 0
                ? `
        <div class="budget-line">
            <span class="label">Recargo por urgencia (30%)</span>
            <span class="amount">+$${urgencyCharge} USD</span>
        </div>
        `
                : ""
        }
        
        ${
            discountCharge > 0
                ? `
        <div class="budget-line">
            <span class="label">Descuento por flexibilidad (10%)</span>
            <span class="amount" style="color: #dc2626;">-$${discountCharge} USD</span>
        </div>
        `
                : ""
        }
        
        <div class="budget-line total">
            <span class="label">TOTAL DE LA INVERSIÓN</span>
            <span class="amount">$${totalPrice} USD</span>
        </div>
    </div>

    <div class="terms">
        <h3>Términos y Condiciones</h3>
        <ul>
            <li>Validez: Esta cotización tiene una vigencia de 10 días calendario</li>
            <li>Condiciones de pago: 50% de anticipo para iniciar, 50% restante al finalizar</li>
            <li>Se incluyen 5 revisiones sin costo adicional</li>
            <li>Garantía: 30 días de soporte técnico gratuito posterior a la entrega</li>
            <li>El cliente debe proporcionar todo el contenido en formato digital</li>
            <li>Hosting y dominio no incluidos en el precio base</li>
        </ul>
    </div>

    <div class="footer">
        <p><strong>¡Gracias por confiar en nosotros para su proyecto digital!</strong></p>
        <p>Para dudas o aclaraciones, no dude en contactarnos</p>
    </div>
</body>
</html>
    `;
};

// Función para detectar dispositivos móviles
const isMobileDevice = (): boolean => {
    return (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        ) || window.innerWidth <= 768
    );
};

// Función para crear y descargar un archivo
const downloadFile = (content: string, filename: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

// Función para manejar impresión automática en móviles
const handleMobilePrint = (htmlContent: string, clientName: string) => {
    // Intentar usar la API nativa de impresión en móviles
    const printWindow = window.open("", "_blank");
    if (printWindow) {
        printWindow.document.write(htmlContent);
        printWindow.document.close();

        // Auto-imprimir después de que se cargue el contenido
        printWindow.onload = () => {
            // Dar un pequeño delay para que el contenido se renderice completamente
            setTimeout(() => {
                printWindow.print();
                // Cerrar automáticamente después de imprimir (o cancelar)
                setTimeout(() => {
                    printWindow.close();
                }, 1000);
            }, 500);
        };
    } else {
        // Fallback: descargar como archivo HTML si el navegador bloquea pop-ups
        const filename = `presupuesto-${clientName
            .replace(/\s+/g, "-")
            .toLowerCase()}-${new Date().toISOString().split("T")[0]}.html`;
        downloadFile(htmlContent, filename, "text/html");
        alert(
            "Tu navegador bloqueó la ventana emergente. El presupuesto se ha descargado como archivo HTML que puedes abrir e imprimir desde tu móvil."
        );
    }
};

export const handlePrintBudget = (data: BudgetPrintData) => {
    if (!data.selectedPage || !data.clientInfo.name || !data.clientInfo.email) {
        alert(
            "Por favor completa la información del cliente y selecciona un tipo de página antes de imprimir."
        );
        return;
    }

    const printHTML = generatePrintableHTML(data);

    if (isMobileDevice()) {
        // En móviles: impresión automática
        handleMobilePrint(printHTML, data.clientInfo.name);
    } else {
        // En desktop: método tradicional de impresión
        const printWindow = window.open("", "_blank");
        if (printWindow) {
            printWindow.document.write(printHTML);
            printWindow.document.close();

            // Esperar a que se cargue el contenido y luego imprimir
            printWindow.onload = () => {
                printWindow.print();
                printWindow.close();
            };
        } else {
            // Fallback para desktop si falla la ventana emergente
            const filename = `presupuesto-${data.clientInfo.name
                .replace(/\s+/g, "-")
                .toLowerCase()}-${new Date().toISOString().split("T")[0]}.html`;
            downloadFile(printHTML, filename, "text/html");
            alert(
                "No se pudo abrir la ventana de impresión. El presupuesto se ha descargado como archivo HTML que puedes abrir e imprimir."
            );
        }
    }
};
