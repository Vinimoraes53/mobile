export default class Cpf {
    static formatar(cpf: string): string {
        if (cpf.length > 14) return cpf.substring(0, 14);
        return cpf
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }

    static desformatar(cpf: string): string {
        return cpf.replace(/\D/g, '');
    }

    static validar(cpf: string): boolean {
        cpf = this.desformatar(cpf);

        // Verifica se o CPF tem exatamente 11 dígitos
        if (cpf.length !== 11) return false;

        return true; // Apenas valida o tamanho
    }
}