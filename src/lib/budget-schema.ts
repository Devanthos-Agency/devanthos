/**
 * Schema para la API de generación de presupuestos en PDF
 *
 * Este archivo define las interfaces TypeScript que representan
 * la estructura de datos que la API espera recibir para generar
 * un PDF del presupuesto.
 */

/**
 * Información del cliente que solicita el presupuesto
 */
export interface ClientInfo {
    /** Nombre completo del cliente */
    name: string;

    /** Email de contacto del cliente */
    email: string;

    /** Nombre de la empresa (opcional) */
    company?: string;

    /** Descripción del proyecto y requerimientos */
    description?: string;
}

/**
 * Características de una página/proyecto específico
 */
export interface PageFeature {
    /** Nombre de la característica */
    name: string;

    /** Descripción breve de la característica */
    description: string;

    /** Detalles específicos incluidos en esta característica */
    details: string[];
}

/**
 * Tipo de página web seleccionado
 */
export interface SelectedPageType {
    /** Identificador único del tipo de página */
    id: string;

    /** Nombre del tipo de página */
    name: string;

    /** Descripción detallada del tipo de página */
    description: string;

    /** Precio base en USD */
    basePrice: number;

    /** Días estimados de desarrollo */
    estimatedDays: number;

    /** Lista de características incluidas */
    features: PageFeature[];
}

/**
 * Característica adicional opcional
 */
export interface AdditionalFeature {
    /** Identificador único de la característica */
    id: string;

    /** Nombre de la característica adicional */
    name: string;

    /** Precio adicional en USD */
    price: number;

    /** Descripción detallada de la característica */
    description: string;

    /** Lista de beneficios que ofrece esta característica */
    benefits: string[];
}

/**
 * Timeline del proyecto
 */
export type Timeline = 'urgent' | 'normal' | 'extended';

/**
 * Detalle completo del presupuesto
 */
export interface BudgetRequest {
    /** Información del cliente */
    clientInfo: ClientInfo;

    /** Tipo de página seleccionado */
    pageType: SelectedPageType;

    /** Lista de características adicionales seleccionadas */
    additionalFeatures: AdditionalFeature[];

    /** Timeline de entrega seleccionado */
    timeline: Timeline;

    /** Días estimados calculados según el timeline */
    estimatedDays: number;

    /** Fecha de entrega estimada (formato legible) */
    deliveryDate: string;

    /** Precio total calculado en USD */
    totalPrice: number;

    /** Fecha de generación del presupuesto (ISO 8601) */
    generatedAt?: string;

    /** Número de presupuesto único (opcional, puede ser generado por el servidor) */
    budgetNumber?: string;
}

/**
 * Respuesta de la API al generar el PDF
 */
export interface BudgetPdfResponse {
    /** Indica si la generación fue exitosa */
    success: boolean;

    /** URL del PDF generado (puede ser temporal o permanente) */
    pdfUrl?: string;

    /** PDF en formato base64 (alternativa a pdfUrl) */
    pdfBase64?: string;

    /** Mensaje de respuesta */
    message?: string;

    /** Número de presupuesto asignado */
    budgetNumber?: string;

    /** Código de error en caso de falla */
    errorCode?: string;
}

/**
 * Configuración de la solicitud a la API
 */
export interface ApiBudgetConfig {
    /** URL del endpoint de la API */
    apiEndpoint: string;

    /** Headers adicionales (ej: autenticación) */
    headers?: Record<string, string>;

    /** Timeout en milisegundos */
    timeout?: number;
}

/**
 * Ejemplo de uso del schema para la API:
 *
 * ```typescript
 * const budgetData: BudgetRequest = {
 *   clientInfo: {
 *     name: "Juan Pérez",
 *     email: "juan@example.com",
 *     company: "Mi Empresa S.A.",
 *     description: "Necesito una landing page para mi producto"
 *   },
 *   pageType: {
 *     id: "landing",
 *     name: "Landing Page",
 *     description: "...",
 *     basePrice: 250,
 *     estimatedDays: 7,
 *     features: [...]
 *   },
 *   additionalFeatures: [...],
 *   timeline: "normal",
 *   estimatedDays: 7,
 *   deliveryDate: "15 de enero de 2024",
 *   totalPrice: 450,
 *   generatedAt: new Date().toISOString()
 * };
 *
 * // Enviar a la API
 * const response = await fetch('/api/generate-budget-pdf', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify(budgetData)
 * });
 *
 * const result: BudgetPdfResponse = await response.json();
 * ```
 */
